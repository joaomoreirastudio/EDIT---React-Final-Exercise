import React, { useEffect, useState } from "react";
import {
    ProductPageGridContainer,
    ProductItem,
    ProductImg,
    ProductName,
    ProductPrice,
} from "./productPageGrid.styled";

interface Product {
    productImg: string;
    productImg2: string;
    productName: string;
    productPrice: string;
}

interface ProductPageGridProps {
    products: Product[];
}

const ProductsPageGrid: React.FC<ProductPageGridProps> = ({ products }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [hoveredProduct, setHoveredProduct] = useState<{
        [key: string]: boolean;
    }>({});
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section>
            <ProductPageGridContainer>
                {products.map((product) => {
                    const isHovered =
                        hoveredProduct[product.productName] || false;
                    const imageSrc = isMobile
                        ? scrollPosition % 2 === 0
                            ? product.productImg
                            : product.productImg2
                        : isHovered
                        ? product.productImg2
                        : product.productImg;

                    return (
                        <ProductItem
                            key={product.productName}
                            onMouseEnter={() =>
                                !isMobile &&
                                setHoveredProduct({
                                    ...hoveredProduct,
                                    [product.productName]: true,
                                })
                            }
                            onMouseLeave={() =>
                                !isMobile &&
                                setHoveredProduct({
                                    ...hoveredProduct,
                                    [product.productName]: false,
                                })
                            }
                        >
                            <ProductImg
                                src={imageSrc}
                                alt={product.productName}
                            />
                            <ProductName>{product.productName}</ProductName>
                            <ProductPrice>{product.productPrice}</ProductPrice>
                        </ProductItem>
                    );
                })}
            </ProductPageGridContainer>
        </section>
    );
};

export default ProductsPageGrid;
