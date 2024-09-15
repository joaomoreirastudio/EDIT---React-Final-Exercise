import React, { useEffect, useState } from "react";
import { useTitle } from "../../../context/TitleContext";
import titleStyles from "../../../context/TitleContext.module.css";
import {
    Carousel,
    CarouselImages,
    SharedImages__Container,
    SharedImg,
} from "./sharedImagesClients.styled";

interface SharedImg {
    sharedImg: string;
}

interface SharedImagesClientsProps {
    sharedImgGrid: SharedImg[];
}

const SharedImagesClients: React.FC<SharedImagesClientsProps> = ({
    sharedImgGrid,
}) => {
    const { titles, setTitle } = useTitle();
    const componentKey = "sharedImagesClients";
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setTitle(componentKey, "Shop these real-life spaces");
    }, [setTitle]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex + 4 >= sharedImgGrid.length ? 0 : prevIndex + 4
            );
        }, 3000); // Muda a cada 3 segundos

        return () => clearInterval(interval);
    }, [sharedImgGrid.length]);

    const getTransformValue = () => {
        if (window.innerWidth >= 768) {
            return `translateX(-${currentIndex * 20}%)`;
        }
        return "none";
    };

    return (
        <>
            <SharedImages__Container>
                <div>
                    <h2 className={titleStyles.section__title}>
                        {titles[componentKey]}
                    </h2>
                </div>
                <Carousel>
                    <CarouselImages style={{ transform: getTransformValue() }}>
                        {sharedImgGrid.map(
                            (
                                sharedImg: {
                                    sharedImg: string | undefined;
                                },
                                index
                            ) => (
                                <SharedImg key={index}>
                                    <img
                                        src={sharedImg.sharedImg}
                                        alt="sharedImg"
                                    />
                                </SharedImg>
                            )
                        )}
                    </CarouselImages>
                </Carousel>
            </SharedImages__Container>
        </>
    );
};

export default SharedImagesClients;
