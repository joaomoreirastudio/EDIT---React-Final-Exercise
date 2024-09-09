import React from "react";
import styles from "./MainCategories.module.scss";

interface Category {
    productName: string;
    productImg: string;
}

interface MainCategoriesProps {
    categories: Category[];
}

const MainCategories: React.FC<MainCategoriesProps> = ({ categories }) => {
    return (
        <div>
            <section className={styles.categories}>
                <h2 className={styles.section__title}>
                    Clever designs, delivered free
                </h2>
                <div className={styles.categories__grid}>
                    {categories.map((category) => (
                        <div
                            className={styles.categories__grid__item}
                            key={category.productName}
                        >
                            <img
                                className={styles.categories__grid__item__img}
                                src={category.productImg}
                                alt={category.productName}
                            />
                            <p className={styles.categories__title}>
                                {category.productName}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default MainCategories;
