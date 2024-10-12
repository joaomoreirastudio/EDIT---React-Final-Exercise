import { useEffect, useState } from "react";
import NavBar from "../components/shared/NavBar/NavBar";
import Footer from "../components/shared/Footer/footer";
import FinalProduct from "../components/ProductDetailPage/finalProduct/finalProduct";
import ProductDimensions from "../components/ProductDetailPage/ProductDimensions/ProductDimensions";
import AboutThisProduct from "../components/ProductDetailPage/AboutProduct/AboutThisProduct";
import ProductKeyFeatures from "../components/ProductDetailPage/ProductKeyFeatures/ProductKeyFeatures";
import ProductAdvantages from "../components/ProductDetailPage/ProductAdvantages/ProductAdvantages";
import RelatedProducts from "../components/ProductDetailPage/RelatedProducts/RelatedProducts";
interface Product {
    productId: number;
    productImg: string;
    productImg2: string;
    productName: string;
    productPrice: string;
    colors: any[];
}
function ProductPage() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("../../api/seating-products.json")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (
        <>
            <NavBar />
            <FinalProduct products={products} />
            <ProductDimensions />
            <AboutThisProduct />
            <ProductKeyFeatures />
            <ProductAdvantages />
            <RelatedProducts products={products} />
            <Footer />
        </>
    );
}

export default ProductPage;
