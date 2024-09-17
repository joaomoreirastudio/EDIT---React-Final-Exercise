import { useEffect, useState } from "react";

import MainCategories from "../../components/Home/MainCategories/MainCategories";
import MainSlider from "../../components/Home/MainSlider/MainSlider";
import NavBar from "../../components/shared/NavBar/NavBar";
import Footer from "../../components/shared/Footer/footer";
import ProductsAdvantages from "../../components/Home/productsAdvantages/productsAdvantages";
import FirstDeliveriesCarousel from "../../components/Home/firstDeliveriesCarousel/firstDeliveriesCarousel";
import NomadSection from "../../components/Home/nomadSection/nomadSection";
import { TitleProvider } from "../../context/TitleContext";
import SharedImagesClients from "../../components/Home/sharedImagesClients/sharedImagesClients";
import ModularVideo from "../../components/Home/modularVideo/modularVideo";

interface Category {
    productName: string;
    productImg: string;
}
interface SharedImg {
    sharedImg: string;
}

function HomePage() {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        fetch("../api/product-category.json")
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    const [sharedImg, SetSharedImg] = useState<SharedImg[]>([]);

    useEffect(() => {
        fetch("../api/shared-images.json")
            .then((response) => response.json())
            .then((data) => SetSharedImg(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (
        <>
            <TitleProvider>
                <NavBar />
                <MainSlider />
                <MainCategories categories={categories} />
                <ProductsAdvantages />
                <FirstDeliveriesCarousel />
                <NomadSection />
                <SharedImagesClients sharedImgGrid={sharedImg} />
                <ModularVideo />
                <Footer />
            </TitleProvider>
        </>
    );
}

export default HomePage;
