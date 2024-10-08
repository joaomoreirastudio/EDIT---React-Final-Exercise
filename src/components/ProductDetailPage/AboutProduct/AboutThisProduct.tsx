import React from "react";
import {
    AboutContainer,
    Title,
    Description,
    FeatureList,
    FeatureItem,
    FeatureTitle,
    DescriptionFeature,
} from "./AboutThisProduct.styled";

const AboutThisProduct = () => {
    return (
        <AboutContainer>
            <Title>About this Product</Title>
            <Description>
                The ideal three-seat sofa featuring one seat with a chaise
                lounge addition, one seat with an ottoman, and one seat for the
                chiropractor who loves to sit upright with their feet on the
                floor. Like everything we make, our modular design is incredibly
                easy to move and packed with all the clever, life-changing
                features you expect from Burrow, starting with a built-in USB
                charger.
            </Description>
            <FeatureList>
                <FeatureItem>
                    <FeatureTitle>Customizable</FeatureTitle>
                    <DescriptionFeature>
                        Create your ideal sectional sofa with five fabric
                        colors, six leg finishes, and three armrest heights. You
                        can even swap the reversible back cushions: one side is
                        tufted for a classic look, the other smooth and
                        contemporary.
                    </DescriptionFeature>
                </FeatureItem>
                <FeatureItem>
                    <FeatureTitle>Adaptable</FeatureTitle>
                    <DescriptionFeature>
                        Rest easy with the knowledge that your new furniture can
                        grow and expand with your life, thanks to the universal,
                        modular design of our Nomad Collection.
                    </DescriptionFeature>
                </FeatureItem>
            </FeatureList>
        </AboutContainer>
    );
};

export default AboutThisProduct;
