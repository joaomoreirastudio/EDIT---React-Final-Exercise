import React from "react";
import {
    NomadSection__brand,
    NomadSection__btn,
    NomadSection__Container,
    NomadSection__img,
    NomadSection__title,
} from "./nomadSection.styled";

import nomadImage from "../../../assets/banners/nomad.png";

interface NomadSectionProps {
    title: string;
}

const NomadSection: React.FC<NomadSectionProps> = () => {
    return (
        <>
            <NomadSection__Container>
                <NomadSection__brand>
                    <span>NOMAD</span>
                </NomadSection__brand>
                <NomadSection__title>
                    <p>
                        <span>The Ambid </span>system works beautifully. It's
                        comfortable, absolutely solid, and looks great.
                    </p>
                </NomadSection__title>
                <NomadSection__btn>
                    <button>SHOP NOW</button>
                </NomadSection__btn>
                <NomadSection__img>
                    <img src={nomadImage} alt="Nomad" />
                </NomadSection__img>
            </NomadSection__Container>
        </>
    );
};

export default NomadSection;
