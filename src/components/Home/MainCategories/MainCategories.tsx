import React, { useEffect } from "react";
import styles from "./MainCategories.module.scss";
import { useTitle } from "../../../context/TitleContext";
import titleStyles from "../../../context/TitleContext.module.css";

interface Category {
    productName: string;
    productImg: string;
}

interface MainCategoriesProps {
    categories: Category[];
}

const MainCategories: React.FC<MainCategoriesProps> = ({ categories }) => {
    const { titles, setTitle } = useTitle();
    const componentKey = "mainCategories";

    useEffect(() => {
        setTitle(componentKey, "Clever designs, delivered free");
    }, []);

    return (
        <div>
            <section className={styles.categories}>
                <h2 className={titleStyles.section__title}>
                    {titles[componentKey]}
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
