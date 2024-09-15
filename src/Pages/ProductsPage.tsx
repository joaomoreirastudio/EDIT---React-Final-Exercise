import React, { useEffect, useState } from "react";
import { TitleProvider } from "../context/TitleContext";
import NavBar from "../components/shared/NavBar/NavBar";
import Footer from "../components/shared/Footer/footer";
import ProductsPageHeader from "../components/ProductPage/ProductPageHeader/ProductPageHeader";

interface Product {
    productImg: string;
    productImg2: string;
    productName: string;
    productPrice: string;
}

function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("../../api/seating-products.json")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (
        <>
            <TitleProvider>
                <NavBar />
                <ProductsPageHeader />

                <Footer />
            </TitleProvider>
        </>
    );
}

export default ProductsPage;
