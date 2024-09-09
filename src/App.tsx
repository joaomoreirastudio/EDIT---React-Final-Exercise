import { useEffect, useState } from "react";
import "./App.css";
import MainCategories from "./components/MainCategories/MainCategories";
import MainSlider from "./components/MainSlider/MainSlider";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/footer";
import ProductsAdvantages from "./components/productsAdvantages/productsAdvantages";
import FirstDeliveriesCarousel from "./components/firstDeliveriesCarousel/firstDeliveriesCarousel";

interface Category {
    productName: string;
    productImg: string;
}

function App() {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        // Simulate fetching data from an API
        fetch("../api/product-category.json")
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <>
            <NavBar />
            <MainSlider />
            <MainCategories categories={categories} />
            <ProductsAdvantages />
            <FirstDeliveriesCarousel />
            <Footer />
        </>
    );
}

export default App;
