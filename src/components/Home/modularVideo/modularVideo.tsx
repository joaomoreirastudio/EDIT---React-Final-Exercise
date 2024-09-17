import React, { useEffect, useState } from "react";
import { useTitle } from "../../../context/TitleContext";
import titleStyles from "../../../context/TitleContext.module.css";
import modularVideo from "../../../assets/video/background-video.mp4";
import {
    ModularVideo__Section,
    ModularVideo__Container,
} from "./modularVideo.styled";

const ModularVideo = () => {
    const { titles, setTitle } = useTitle();
    const componentKey = "modularVideo";

    useEffect(() => {
        setTitle(componentKey, "Modular, easy-to-move design");
    }, []);
    return (
        <>
            <ModularVideo__Section>
                <h2 className={titleStyles.section__title}>
                    {titles[componentKey]}
                </h2>
                <ModularVideo__Container>
                    <video autoPlay muted loop>
                        <source src={modularVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </ModularVideo__Container>
                <button className="btn">SHOP BEDROOM</button>
            </ModularVideo__Section>
        </>
    );
};

export default ModularVideo;
