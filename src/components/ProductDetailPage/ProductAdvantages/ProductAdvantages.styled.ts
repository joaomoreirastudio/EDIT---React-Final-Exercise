import styled from "styled-components";

export const Container = styled.div`
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
        width: 70%;
        max-width: 100rem;
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    &.MobileHide {
        display: none;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 1rem;
        &.MobileHide {
            display: flex;
        }
    }
`;

export const VideoContainer = styled.div`
    flex: 1;
    display: grid;
    place-items: center;
    width: 100%;

    video {
        max-width: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
    }
`;

export const TextContainer = styled.div`
    flex: 1;
    padding: 1rem 0;

    h2 {
        font-weight: 400;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 0.5rem;
    }
`;

export const Features = styled.div`
    display: flex;
    justify-content: space-between;

    p {
        padding-top: 1rem;
        margin-bottom: 0;
    }

    span {
        font-size: 0.5rem;
        color: gray;
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: flex-start;
        gap: 2rem;
    }
`;
