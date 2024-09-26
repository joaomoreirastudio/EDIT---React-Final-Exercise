import { useEffect, useState } from "react";
import { TitleProvider } from "../context/TitleContext";
import NavBar from "../components/shared/NavBar/NavBar";
import Footer from "../components/shared/Footer/footer";
import ProductsPageHeader from "../components/CategoryProductPage/ProductPageHeader/ProductPageHeader";
import ProductsPageGrid from "../components/CategoryProductPage/ProductPageGrid/productPageGrid";
import styled from "styled-components";

interface Product {
    productId: number;
    productImg: string;
    productImg2: string;
    productName: string;
    productPrice: string;
}

const ContentContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`;

function SeatingProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("/api/seating-products.json")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <TitleProvider>
            <NavBar />
            <ContentContainer>
                <ProductsPageHeader />
                <ProductsPageGrid products={products} />
            </ContentContainer>
            <Footer />
        </TitleProvider>
    );
}

export default SeatingProductsPage;
