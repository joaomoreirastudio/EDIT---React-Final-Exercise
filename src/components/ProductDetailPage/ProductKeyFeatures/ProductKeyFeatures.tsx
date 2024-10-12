import {
    FeaturesContainer,
    Feature,
    Icon,
    Label,
    Title,
} from "./ProductKeyFeatures.styled";
import icon1 from "/assets/products/KeyFeatures/icon-1.webp";
import icon2 from "/assets/products/KeyFeatures/icon-2.webp";
import icon3 from "/assets/products/KeyFeatures/icon-3.webp";
import icon4 from "/assets/products/KeyFeatures/icon-4.webp";
import icon5 from "/assets/products/KeyFeatures/icon-5.webp";
const KeyFeatures = () => {
    return (
        <>
            <Title>Key Features</Title>
            <FeaturesContainer>
                <Feature>
                    <Icon src={icon2} alt="icon" />
                    <Label>Customizable</Label>
                </Feature>
                <Feature>
                    <Icon src={icon3} alt="icon" />
                    <Label>Frame</Label>
                </Feature>
                <Feature>
                    <Icon src={icon4} alt="icon" />
                    <Label>Hardware</Label>
                </Feature>
                <Feature>
                    <Icon src={icon1} alt="icon" />
                    <Label>Charger</Label>
                </Feature>
                <Feature>
                    <Icon src={icon5} alt="icon" />
                    <Label>Legs</Label>
                </Feature>
            </FeaturesContainer>
        </>
    );
};

export default KeyFeatures;
