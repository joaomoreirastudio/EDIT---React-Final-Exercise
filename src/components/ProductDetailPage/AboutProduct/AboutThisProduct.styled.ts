import styled from "styled-components";
const flex = (alignItems: string, justifyContent: string) => `
display: flex;
align-items: ${alignItems};
justify-content: ${justifyContent};`;
const AboutContainer = styled.div`
    padding: 3rem 0;
    margin: 0 auto;
    width: 90%;
    padding: 2rem 0;
    @media screen and (min-width: 768px) {
        ${flex("flex-start", "center")}
        flex-direction: column;
        width: 70%;
        max-width: 90rem;
        margin: 0 auto;
    }
`;

const Title = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
    margin-bottom: 10px;
`;

const DescriptionFeature = styled.p`
    font-size: 0.8rem;
    line-height: 1.6;
    color: #666;
    @media screen and (min-width: 768px) {
        font-size: 0.6rem;
    }
`;
const Description = styled.p`
    font-size: 0.8rem;
    line-height: 1.6;
    color: #666;
    @media screen and (min-width: 768px) {
        font-size: 0.7rem;
    }
`;

const FeatureList = styled.div`
    @media screen and (min-width: 768px) {
        ${flex("flex-start", "flex-start")}
        margin-top: 20px;
    }
`;

const FeatureItem = styled.div`
    width: 100%;
    text-justify: center;
    @media screen and (min-width: 768px) {
        text-align: left;
        width: 50%;
        max-width: 20rem;
        padding: 1rem 1rem 1rem 0;
    }
`;

const FeatureTitle = styled.h4`
    padding: 0.5rem 0;
    font-size: 0.8rem;
    margin-bottom: 5px;
    font-weight: 600;
`;

export {
    AboutContainer,
    Title,
    Description,
    DescriptionFeature,
    FeatureList,
    FeatureItem,
    FeatureTitle,
};
