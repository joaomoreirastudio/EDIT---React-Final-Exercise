import styled from "styled-components";
const flex = (alignItems: string, justifyContent: string) => `
display: flex;
align-items: ${alignItems};
justify-content: ${justifyContent};`;
export const FeaturesContainer = styled.div`
    ${flex("center", "space-between")}
    flex-wrap: wrap;
    margin: 0 auto;
    width: 90%;
    padding: 2rem 0;
    @media screen and (min-width: 768px) {
        ${flex("center", "space-between")}
        flex-direction: row;
        width: 70%;
        max-width: 100rem;
        margin: 0 auto;
    }
`;
export const Title = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
    ${flex("center", "center")}
    @media (min-width: 768px) {
        align-items: flex-start;
        justify-content: flex-start;
        text-align: left;
        width: 70%;
        max-width: 90rem;
        margin: 0 auto;
    }
`;

export const Feature = styled.div`
    text-align: center;
    width: 50%;
    max-width: 8rem;
    @media (min-width: 768px) {
        width: 25%;
        max-width: 6rem;
    }
`;

export const Icon = styled.img`
    width: 100%;
`;

export const Label = styled.p`
    padding: 0.5rem 0;
    font-size: 0.7rem;
    margin-bottom: 5px;
    font-weight: 600;
    color: #333;
`;
