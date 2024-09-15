import styled from "styled-components";
const flex = (alignItems: string, justifyContent: string) => `
  display: flex;
  align-items: ${alignItems};
  justify-content: ${justifyContent};
`;

export const NomadSection__Container = styled.div`
    ${flex("flex-start", "flex-start")}
    flex-direction: column;
    background: #f7eee3;
    z-index: 1;
    padding: 0.25rem 0.75rem 0.75rem 0.75rem;
    height: 21rem;
    position: relative;
    @media screen and (min-width: 768px) {
        padding: 3% 7% 3% 7%;
    }
`;

export const NomadSection__brand = styled.div`
    span {
        font-size: 0.5rem;
        font-weight: 600;
        font-style: italic;
        text-decoration: underline;
        letter-spacing: 0.5rem;
    }
`;

export const NomadSection__title = styled.div`
    padding-top: 2rem;
    width: 80%;
    p {
        font-size: 0.85rem;
        font-weight: 300;
        font-style: italic;
        line-height: 2rem;
    }
    span {
        font-size: 0.85rem;
        font-weight: 600;
    }
    @media screen and (min-width: 768px) {
        width: 15rem;
        p {
            font-size: 1rem;
        }
        span {
            font-size: 1rem;
        }
    }
`;
export const NomadSection__btn = styled.div`
    button {
        background: none;
        border: none;
        font-weight: 600;
        font-size: 0.5rem;
        padding: 0;
    }
`;
export const NomadSection__img = styled.div`
    position: absolute;
    bottom: 0;
    padding: 0;
    width: 15rem;
    right: 0;
    margin: 0;
    overflow: hidden;

    img {
        width: 100%;
        display: block;
    }
    @media screen and (min-width: 768px) {
        width: 23rem;
    }
`;
