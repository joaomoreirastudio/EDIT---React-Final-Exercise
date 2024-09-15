import React, { useEffect } from "react";
import { useTitle } from "../../../context/TitleContext";
import titleStyles from "../../../context/TitleContext.module.css";

const ProductsPageHeader = () => {
    const { titles, setTitle } = useTitle();
    const componentKey = "ProductPageHeader";

    useEffect(() => {
        setTitle(componentKey, "Clever designs, delivered free");
    }, [setTitle]);

    return (
        <>
            <h2 className={titleStyles.section__title}>
                {titles[componentKey]}
            </h2>
        </>
    );
};

export default ProductsPageHeader;
