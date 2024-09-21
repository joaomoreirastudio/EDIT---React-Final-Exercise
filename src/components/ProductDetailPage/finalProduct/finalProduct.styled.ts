import styled from "styled-components";

const flex = (alignItems: string, justifyContent: string) => `
display: flex;
align-items: ${alignItems};
justify-content: ${justifyContent};`;

export const FinalProductContainer = styled.div`
    ${flex("center", "center")}
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
    padding: 2rem 0;
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

    span {
        font-size: 0.5rem;
        font-weight: 700;
        padding-right: 0.5rem;
    }
`;

export const FinalProductColor__Title = styled.span`
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem 0;

    span {
        font-size: 0.5rem;
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
        font-size: 0.5rem;
        font-weight: 700;
        padding-right: 0.5rem;
    }
`;

export const ColorCircle = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;
