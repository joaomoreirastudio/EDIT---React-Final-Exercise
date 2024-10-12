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
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        setTitle(componentKey, "Shop these real-life spaces");
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex + 4 >= sharedImgGrid.length ? 0 : prevIndex + 4
            );
        }, 3000); // Changes every 3 seconds

        return () => clearInterval(interval);
    }, [sharedImgGrid.length]);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getTransformValue = () => {
        if (windowWidth >= 768) {
            return `translateX(-${currentIndex * 20}%)`;
        }
        return "none";
    };

    const imagesToShow =
        windowWidth < 768 ? sharedImgGrid.slice(0, 4) : sharedImgGrid;

    return (
        <SharedImages__Container>
            <div>
                <h2 className={titleStyles.section__title}>
                    {titles[componentKey]}
                </h2>
            </div>
            <Carousel>
                <CarouselImages style={{ transform: getTransformValue() }}>
                    {imagesToShow.map(
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
    );
};

export default SharedImagesClients;
