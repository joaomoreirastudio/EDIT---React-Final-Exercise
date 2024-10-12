import { useEffect } from "react";
import { useTitle } from "../../../context/TitleContext";
import titleStyles from "../../../context/TitleContext.module.css";

import styles from "./ProductPageHeader.styled";

const ProductsPageHeader = () => {
    const { titles, setTitle } = useTitle();
    const componentKey = "ProductPageHeader";

    useEffect(() => {
        setTitle(componentKey, "All Seating");
    }, [componentKey, setTitle]);

    return (
        <>
            <styles.Section__intro__main>
                <styles.Section__intro__container>
                    {" "}
                    <styles.Section__title
                        className={titleStyles.section__title}
                    >
                        {titles[componentKey]}
                    </styles.Section__title>
                    <styles.Section__text>
                        The main feature of any living room is always going to
                        be the seating. Pick and choose your seating styles to
                        build the perfect place to relax. Unwind by yourself,
                        spend time with your family, or entertain guests, all in
                        ultimate comfort.
                    </styles.Section__text>
                </styles.Section__intro__container>
            </styles.Section__intro__main>
        </>
    );
};

export default ProductsPageHeader;
