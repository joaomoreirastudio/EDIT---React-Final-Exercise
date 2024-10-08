import styled from "styled-components";

const flex = (alignItems: string, justifyContent: string) => `
display: flex;
align-items: ${alignItems};
justify-content: ${justifyContent};`;

export const FinalProductSection = styled.div`
    ${flex("center", "center")}
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
    padding: 2rem 0;
    @media screen and (min-width: 768px) {
        width: 70%;
        max-width: 90rem;
    }
`;

export const FinalProductContainer = styled.div`
    @media screen and (min-width: 768px) {
        ${flex("flex-start", "space-between")}
        gap: 1rem;
    }
`;

export const TitleCollection = styled.span`
    display: flex;
    width: 100%;
    font-size: 0.6rem;
    font-weight: 700;
    padding: 0.5rem 0;
`;

export const FinalProductImages__container = styled.div`
    width: 100%;
    @media screen and (min-width: 768px) {
        width: 70%;
    }
`;

export const FinalProductImages__Main = styled.div`
    width: 100%;

    img {
        width: 100%;
        height: 100%;
    }
`;
export const FinalProductImages__ThumbnailsContainer = styled.div`
    ${flex("space-between", "space-between")};
    width: 100%;
    padding: 0.5rem 0;
    flex-wrap: wrap;

    img {
        width: calc((100% / 4) - 0.25rem);
    }
`;

export const FinalProductInfo = styled.div`
    padding: 0.5rem 0;
    width: 100%;
    vertical-align: top;
    @media screen and (min-width: 768px) {
        width: 30%;
    }
`;

export const FinalProductInfo__Title = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`;

export const FinalProductInfo__Price = styled.p`
    font-size: 0.5rem;
    padding: 0.5rem 0;
`;

export const FinalProductColor__section = styled.div`
    ${flex("flex-start", "center")}
    flex-direction: column;
    padding: 0.5rem 0;
    width: 100%;
    @media screen and (min-width: 768px) {
        padding: 0.3rem 0;
    }

    span {
        font-size: 0.6rem;
        font-weight: 700;
        padding-right: 0.5rem;
    }
`;

export const FinalProductColor__Title = styled.span`
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem 0;
    @media screen and (min-width: 768px) {
        padding: 0.3rem 0;
    }

    span {
        font-size: 0.6rem;
        font-weight: 700;
        padding-right: 0.5rem;
    }
`;
export const FinalProductColor__Container = styled.div`
    ${flex("flex-start", "flex-start")}
    flex-direction: row;
    padding: 0.5rem 0;
    gap: 0.5rem;

    span {
        font-size: 0.6rem;
        font-weight: 700;
        padding-right: 0.5rem;
    }
`;

export const ColorCircle = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${(props) => props.color};

    &:active {
        border: 2px solid black;
        box-sizing: border-box;
    }

    &.activeColor {
        border: 2px solid black;
        box-sizing: border-box;
    }
`;

export const CustomConfigs = styled.div`
    ${flex("flex-start", "flex-start")}
    flex-direction: row;
    width: 100%;
`;

export const CustomConfigCategories = styled.div`
    ${flex("flex-start", "flex-start")}
    flex-direction: column;
    padding: 1rem 0;
    width: 100%;
    @media screen and (min-width: 768px) {
        padding: 0.3rem 0;
    }

    .configImg__Container {
        ${flex("flex-start", "flex-start")}
        width: 100%;
        flex-direction: row;
        gap: 0.5rem;
        padding-top: 1rem;
    }

    .configImg__Content__armstyle {
        width: 1rem;
    }
    .configImg__Content__flipback {
        width: 1.5rem;
    }
    img {
        width: 100%;
    }
`;

export const CustomConfigTitles = styled.div`
    font-size: 0.6rem;
    font-weight: 700;
    text-align: left;
`;

export const UpgradeItems = styled.div`
    ${flex("flex-start", "center")}
    flex-direction: column;
    width: 100%;

    padding: 0.5rem 0;
`;
export const UpgradeLabel = styled.label`
    font-size: 0.6rem;
    font-weight: 700;
    padding-bottom: 0.5rem;
`;
export const UpgradeInput = styled.input`
    &[type="checkbox"] {
        width: 0.5rem;
        height: 0.5rem;
        transform: scale(1.5);
        margin-right: 10px;
    }
`;

export const UpgradeInput__text = styled.label`
    font-size: 0.55rem;
    color: #9c9c9c;
`;

export const Btn__Container = styled.div`
    width: 100%;

    ${flex("flex-end", "flex-end")};
    @media screen and (min-width: 768px) {
        /* position: absolute;
        bottom: 6rem; */
    }
`;
export const YellowBtn = styled.button`
    background-color: #fced70;
    border: none;
    padding: 1rem;
    border-radius: 0.25rem;
`;
