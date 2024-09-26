import  { useEffect, useState } from "react";
import NavBar from "../components/shared/NavBar/NavBar";
import Footer from "../components/shared/Footer/footer";
import FinalProduct from "../components/ProductDetailPage/finalProduct/finalProduct";
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
            <Footer />
        </>
    );
}

export default ProductPage;
