import React from "react";
import styles from "./firstDeliveriesCarousel.module.scss";
import deliveries from "../../assets/deliveries/Rectangle 9.jpg";
import deliveries2 from "../../assets/deliveries/Rectangle 10.jpg";
import deliveries3 from "../../assets/deliveries/Rectangle 11.jpg";
import deliveries4 from "../../assets/deliveries/Rectangle 12.jpg";

interface FirstDeliveriesCarouselProps {
    // Define any props you need for the Footer component
}

const firstDeliveriesCarouselProps: React.FC<
    FirstDeliveriesCarouselProps
> = () => {
    return (
        <>
            <section className={styles.first__deliveries__carousel}>
                <h2 className={styles.section__title}>
                    Clever designs, delivered free
                </h2>

                <div className={styles.first__deliveries_carousel__container}>
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
