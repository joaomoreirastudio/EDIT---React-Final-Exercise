import styled from "styled-components";

const flex = (alignItems: string, justifyContent: string) => `
  display: flex;
  align-items: ${alignItems};
  justify-content: ${justifyContent};
`;

export const ProductPageGridContainer = styled.div`
    ${flex("center", "space-between")}
    flex-wrap: wrap;
    width: 100%;
    @media screen and (min-width: 768px) {
    }
`;

export const ProductItem = styled.div`
    width: 100%;
    @media screen and (min-width: 768px) {
        width: 32.5%;
    }
`;

export const ProductImg = styled.img`
    width: 100%;
    @media screen and (min-width: 768px) {
        transition: opacity 0.3s ease-in-out;
    }
`;

export const ProductName = styled.p`
    font-size: 0.6rem;
    font-weight: 500;
    padding: 0.5rem 0 0.5rem 0;
    @media screen and (min-width: 768px) {
    }
`;
export const ProductPrice = styled.p`
    font-size: 0.5rem;
    color: #9c9c9c;
    padding-bottom: 1rem;
    @media screen and (min-width: 768px) {
    }
`;

export const Btn__Container = styled.div`
    width: 100%;
    padding: 1rem 0;
    ${flex("center", "center")};
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
