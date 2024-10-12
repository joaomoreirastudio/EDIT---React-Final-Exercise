import React, { useEffect, useRef } from "react";
import { useTitle } from "../../../context/TitleContext";

import deliveries from "../../../assets/deliveries/Rectangle 9.jpg";
import deliveries2 from "../../../assets/deliveries/Rectangle 10.jpg";
import deliveries3 from "../../../assets/deliveries/Rectangle 11.jpg";
import deliveries4 from "../../../assets/deliveries/Rectangle 12.jpg";
import titleStyles from "../../../context/TitleContext.module.css";
import styles from "./firstDeliveriesCarousel.module.scss";

interface FirstDeliveriesCarouselProps {
    // Define any props you need for the Footer component
}

const firstDeliveriesCarouselProps: React.FC<
    FirstDeliveriesCarouselProps
> = () => {
    const { titles, setTitle } = useTitle();
    const componentKey = "mainCategories";

    useEffect(() => {
        setTitle(componentKey, "Clever designs, delivered free");
    }, []);

    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
        }
    }, []);
    return (
        <>
            <section className={styles.first__deliveries__carousel}>
                <h2 className={titleStyles.section__title}>
                    {titles[componentKey]}
                </h2>

                <div
                    className={styles.first__deliveries_carousel__container}
                    ref={carouselRef}
                >
                    <img
                        src={deliveries}
                        alt="Product 1"
                        className={styles.carousel__image}
                    />
                    <img
                        src={deliveries2}
                        alt="Product 2"
                        className={styles.carousel__image}
                    />
                    <img
                        src={deliveries3}
                        alt="Product 3"
                        className={styles.carousel__image}
                    />
                    <img
                        src={deliveries4}
                        alt="Product 3"
                        className={styles.carousel__image}
                    />
                </div>
            </section>
        </>
    );
};

export default firstDeliveriesCarouselProps;
