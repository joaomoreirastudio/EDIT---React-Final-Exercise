import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    ProductItem,
    ProductImg,
    ProductName,
    ProductPrice,
    RelatedProductGridContainer,
    Title,
} from "./RelatedProducts.styled";

interface Product {
    productId: number;
    productImg: string;
    productImg2: string;
    productName: string;
    productPrice: string;
}

interface RelatedProductGridProps {
    products: Product[];
}

const RelatedProducts: React.FC<RelatedProductGridProps> = ({ products }) => {
    const navigate = useNavigate();

    const handleProductClick = (productId: number) => {
        navigate(`/product/${productId}`);
    };
    const [hoverStates, setHoverStates] = useState<{ [key: number]: boolean }>(
        {}
    );
    const handleMouseEnter = (productId: any) => {
        setHoverStates((prevStates) => ({ ...prevStates, [productId]: true }));
    };

    const handleMouseLeave = (productId: number) => {
        setHoverStates((prevStates) => ({ ...prevStates, [productId]: false }));
    };
    const [touchStates, setTouchStates] = useState<{ [key: number]: boolean }>(
        {}
    );

    const handleTouchStart = (productId: number) => {
        setTouchStates((prev) => ({ ...prev, [productId]: true }));
        setTimeout(() => {
            if (touchStates[productId]) {
                setTouchStates((prev) => ({ ...prev, [productId]: false }));
            }
        }, 500);
    };

    const handleTouchEnd = (productId: number) => {
        setTouchStates((prev) => ({ ...prev, [productId]: false }));
    };
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <section>
            <>
                <Title>Here's what else our designers recommend</Title>
                <RelatedProductGridContainer>
                    {products.slice(0, 3).map((product) => (
                        <ProductItem
                            key={product.productId}
                            onMouseEnter={() =>
                                handleMouseEnter(product.productId)
                            }
                            onMouseLeave={() =>
                                handleMouseLeave(product.productId)
                            }
                            onTouchStart={() =>
                                handleTouchStart(product.productId)
                            }
                            onTouchEnd={() => handleTouchEnd(product.productId)}
                            aria-label={`Product: ${product.productName}`}
                            onClick={() => {
                                handleProductClick(product.productId);
                                handleScrollToTop();
                            }}
                        >
                            <ProductImg
                                src={
                                    hoverStates[product.productId] ||
                                    touchStates[product.productId]
                                        ? product.productImg2
                                        : product.productImg
                                }
                                alt={product.productName}
                            />
                            <ProductName>{product.productName}</ProductName>
                            <ProductPrice>{product.productPrice}</ProductPrice>
                        </ProductItem>
                    ))}
                </RelatedProductGridContainer>
            </>
        </section>
    );
};

export default RelatedProducts;
