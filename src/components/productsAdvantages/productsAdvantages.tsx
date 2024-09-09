import React from "react";
import styles from "./productsAdvantages.module.scss";
import iconTruck from "../../assets/products-advantages/icon-truck.png";
import iconSofa from "../../assets/products-advantages/icon-sofa.png";
import iconTrees from "../../assets/products-advantages/icon-trees.png";
interface ProductAdvantagesProps {
    // Define any props you need for the Footer component
}

const productAdvantages: React.FC<ProductAdvantagesProps> = () => {
    return (
        <>
            <section className={styles.products__advantages}>
                <div className={styles.products__advantages__info}>
                    <div className={styles.products__advantages__info__img}>
                        <img src={iconTruck} alt="Free Shipping" />
                    </div>
                    <div>
                        <p>Fast & free shipping</p>
                        <p>
                            Every single order ships for free. No minimums, no
                            tiers, no fine print whatsoever.
                        </p>
                    </div>
                </div>
                <div className={styles.products__advantages__info}>
                    <div className={styles.products__advantages__info__img}>
                        <img
                            src={iconSofa}
                            alt="Modular, easy-to-move design"
                        />
                    </div>
                    <div>
                        <p>Modular, easy-to-move design</p>
                        <p>
                            Our innovative modular design is driven by the
                            belief that furniture should fit this home, and the
                            next one.
                        </p>
                    </div>
                </div>
                <div className={styles.products__advantages__info}>
                    <div className={styles.products__advantages__info__img}>
                        <img src={iconTrees} alt="Durable, premium materials" />
                    </div>
                    <div>
                        <p>Durable, premium materials</p>
                        <p>
                            We use materials like sustainably-forested wood,
                            strengthened steel hardware, and top-grain Italian
                            leather.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default productAdvantages;
