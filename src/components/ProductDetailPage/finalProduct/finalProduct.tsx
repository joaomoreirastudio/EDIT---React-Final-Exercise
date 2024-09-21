import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    FinalProductContainer,
    FinalProductImages__container,
    FinalProductImages__Main,
    TitleCollection,
    FinalProductImages__ThumbnailsContainer,
    FinalProductInfo,
    FinalProductInfo__Title,
    FinalProductInfo__Price,
    FinalProductColor__section,
    FinalProductColor__Container,
    FinalProductColor__Title,
    ColorCircle,
} from "./finalProduct.styled";
interface Product {
    productId: number;
    productImg: string;
    productImg2: string;
    productName: string;
    productPrice: string;
    colors: Color[];
}
interface Color {
    colorName: string;
    colorCode: string;
}

interface FinalProductProps {}
const FinalProduct: React.FC<FinalProductProps> = () => {
    const { id } = useParams<{ id: string }>() as { id: string };
    const [product, setProduct] = useState<Product | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            fetch("../../api/seating-products.json")
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((data) => {
                    const product = data.find(
                        (product: Product) => product.productId === parseInt(id)
                    );
                    if (!product) {
                        throw new Error("Product not found");
                    }
                    setProduct(product);
                    setSelectedColor(product.colors[0].colorName);
                })
                .catch((error) => {
                    setError(error.message),
                        console.error("Error fetching data:", error);
                });
        };
        fetchProduct();
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Loading...</div>;
    }
    const handleColorClick = (colorName: string) => {
        setSelectedColor(colorName);
    };

    return (
        <>
            <FinalProductContainer>
                <TitleCollection>Nomad Collection</TitleCollection>
                <FinalProductImages__container>
                    <FinalProductImages__Main>
                        <img
                            src={product.productImg}
                            alt={product.productName}
                        />
                    </FinalProductImages__Main>
                    <FinalProductImages__ThumbnailsContainer>
                        <img
                            src={product.productImg2}
                            alt={product.productName}
                        />
                        <img
                            src={product.productImg}
                            alt={product.productName}
                        />
                        <img
                            src={product.productImg2}
                            alt={product.productName}
                        />
                        <img
                            src={product.productImg}
                            alt={product.productName}
                        />
                    </FinalProductImages__ThumbnailsContainer>
                </FinalProductImages__container>
                <FinalProductInfo>
                    <FinalProductInfo__Title>
                        {product.productName}
                    </FinalProductInfo__Title>
                    <FinalProductInfo__Price>
                        {product.productPrice} + Free Shipping
                    </FinalProductInfo__Price>
                    <FinalProductColor__section>
                        <div>
                            {selectedColor && (
                                <FinalProductColor__Title>
                                    {selectedColor}
                                </FinalProductColor__Title>
                            )}
                        </div>
                        <FinalProductColor__Container>
                            {product.colors.map((color) => (
                                <div
                                    key={color.colorName}
                                    onClick={() =>
                                        handleColorClick(color.colorName)
                                    }
                                >
                                    <ColorCircle color={color.colorCode} />
                                </div>
                            ))}
                        </FinalProductColor__Container>
                    </FinalProductColor__section>
                </FinalProductInfo>
                <div>
                    <div>
                        <span>Arm Style</span>
                        <div>
                            <span>config</span>
                            <span>config</span>
                        </div>
                    </div>
                    <div>
                        <span>Flip Back Cushions</span>
                        <div>
                            <span>config</span>
                            <span>config</span>
                        </div>
                    </div>
                </div>
                <div>
                    <span>Upgrades</span>
                    <span>items</span>
                    <span>items</span>
                    <span>items</span>
                    <span>items</span>
                </div>
            </FinalProductContainer>
        </>
    );
};

export default FinalProduct;
