import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import armstyle1 from "/assets/products/armstyles/armstyle1.png";
import armstyle2 from "/assets/products/armstyles/armstyle2.png";
import flipbackcushion1 from "/assets/products/flipBackCushions/flipBackCushion1.png";
import flipbackcushion2 from "/assets/products/flipBackCushions/flipBackCushion2.png";
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
    CustomConfigs,
    CustomConfigTitles,
    CustomConfigCategories,
    UpgradeLabel,
    UpgradeInput,
    UpgradeInput__text,
    UpgradeItems,
    YellowBtn,
    Btn__Container,
    FinalProductSection,
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

interface FinalProductProps {
    products: Product[];
}
const FinalProduct: React.FC<FinalProductProps> = () => {
    const { id } = useParams<{ id: string }>() as { id: string };
    const [product, setProduct] = useState<Product | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [activeColor, setActiveColor] = useState<string | null>(null);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [selectedConfig, setSelectedConfig] = useState("");
    const [mainImage, setMainImage] = useState<string>("");

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
                    setMainImage(product.productImg);
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

    const handleThumbnailClick = (image: string) => {
        setMainImage(image);
    };
    const handleColorClick = (colorName: string, colorCode: string) => {
        setSelectedColor(colorName);
        setActiveColor(colorCode);
    };
    const handleCheckboxChange = (item: string) => {
        setSelectedItems((prevSelectedItems) =>
            prevSelectedItems.includes(item)
                ? prevSelectedItems.filter((i) => i !== item)
                : [...prevSelectedItems, item]
        );
    };
    const handleConfigClick = (configName: string) => {
        setSelectedConfig(configName);
    };
    const items = [
        { label: "Moveable chaise + $495", value: "moveable_chaise" },
        { label: "Ottoman + $345", value: "ottoman" },
        { label: "Lumbar Pillows + $135", value: "lumbar_pillows" },
        { label: "Sleep Kit + $295", value: "sleep_kit" },
    ];

    return (
        <>
            <FinalProductSection>
                <TitleCollection>Nomad Collection</TitleCollection>
                <FinalProductContainer>
                    <FinalProductImages__container>
                        <FinalProductImages__Main>
                            <img src={mainImage} alt={product.productName} />
                        </FinalProductImages__Main>
                        <FinalProductImages__ThumbnailsContainer>
                            <img
                                src={product.productImg2}
                                alt={product.productName}
                                onClick={() =>
                                    handleThumbnailClick(product.productImg2)
                                }
                            />
                            <img
                                src={product.productImg}
                                alt={product.productName}
                                onClick={() =>
                                    handleThumbnailClick(product.productImg)
                                }
                            />
                            <img
                                src={product.productImg2}
                                alt={product.productName}
                                onClick={() =>
                                    handleThumbnailClick(product.productImg2)
                                }
                            />
                            <img
                                src={product.productImg}
                                alt={product.productName}
                                onClick={() =>
                                    handleThumbnailClick(product.productImg)
                                }
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
                                    <ColorCircle
                                        key={color.colorCode}
                                        color={color.colorCode}
                                        className={
                                            activeColor === color.colorCode
                                                ? "activeColor"
                                                : ""
                                        }
                                        onClick={() =>
                                            handleColorClick(
                                                color.colorName,
                                                color.colorCode
                                            )
                                        }
                                    />
                                ))}
                            </FinalProductColor__Container>
                        </FinalProductColor__section>

                        <CustomConfigs>
                            <CustomConfigCategories>
                                <CustomConfigTitles
                                    onClick={() =>
                                        handleConfigClick("Arm Style")
                                    }
                                    className={
                                        selectedConfig === "Arm Style"
                                            ? "selectedConfig"
                                            : ""
                                    }
                                >
                                    Arm Style
                                </CustomConfigTitles>
                                <div className="configImg__Container">
                                    <div
                                        className={`configImg__Content__armstyle ${
                                            selectedConfig === "Arm Style1"
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleConfigClick("Arm Style1")
                                        }
                                    >
                                        <img src={armstyle1} alt="armstyle1" />
                                    </div>

                                    <div
                                        className={`configImg__Content__armstyle ${
                                            selectedConfig === "Arm Style2"
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleConfigClick("Arm Style2")
                                        }
                                    >
                                        <img src={armstyle2} alt="armstyle2" />
                                    </div>
                                </div>
                            </CustomConfigCategories>
                            <CustomConfigCategories>
                                <CustomConfigTitles
                                    onClick={() =>
                                        handleConfigClick("FlipBackCushion")
                                    }
                                    className={
                                        selectedConfig === "FlipBackCushion"
                                            ? "selectedConfig"
                                            : ""
                                    }
                                >
                                    Flip Back Cushions
                                </CustomConfigTitles>
                                <div className="configImg__Container">
                                    <div
                                        className={`configImg__Content__flipback ${
                                            selectedConfig ===
                                            "FlipBackCushion1"
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleConfigClick(
                                                "FlipBackCushion1"
                                            )
                                        }
                                    >
                                        <img
                                            src={flipbackcushion1}
                                            alt="flipbackcushion1"
                                        />
                                    </div>
                                    <div
                                        className={`configImg__Content__flipback ${
                                            selectedConfig ===
                                            "FlipBackCushion2"
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleConfigClick(
                                                "FlipBackCushion2"
                                            )
                                        }
                                    >
                                        <img
                                            src={flipbackcushion2}
                                            alt="flipbackcushion2"
                                        />
                                    </div>
                                </div>
                            </CustomConfigCategories>
                        </CustomConfigs>
                        <UpgradeItems>
                            <UpgradeLabel>Upgrades</UpgradeLabel>
                            {items.map((item) => (
                                <label key={item.value}>
                                    <UpgradeInput
                                        type="checkbox"
                                        value={item.value}
                                        checked={selectedItems.includes(
                                            item.value
                                        )}
                                        onChange={() =>
                                            handleCheckboxChange(item.value)
                                        }
                                    />
                                    <UpgradeInput__text>
                                        {item.label}
                                    </UpgradeInput__text>
                                </label>
                            ))}
                        </UpgradeItems>
                        <Btn__Container>
                            <YellowBtn>ADD TO CART</YellowBtn>
                        </Btn__Container>
                    </FinalProductInfo>
                </FinalProductContainer>
            </FinalProductSection>
        </>
    );
};

export default FinalProduct;
