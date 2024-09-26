import React from "react";
import styles from "./MainSlider.module.scss";
import mainSliderImg from "../../../assets/banners/header.png";

// interface MainSliderProps {
//     title: string;
//     buttonText: string;
// }

// const MainSlider: React.FC<MainSliderProps> = () => {
const MainSlider: React.FC = () => {
    // Implement your component logic here

    return (
        // JSX code for your component goes here
        <div>
            <section className={styles.main__slide}>
                <div className={styles.main__slide__content}>
                    <h2 className={styles.title}>
                        Clever designs, delivered free
                    </h2>
                    <button className={styles.btn}>SHOP BEDROOM</button>
                </div>
                <div className={styles.main__slide__img}>
                    <img src={mainSliderImg} alt="Main Slide" />
                </div>
            </section>
            {/* Add your component content here */}
        </div>
    );
};

export default MainSlider;
