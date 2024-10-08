import styled from "styled-components";
const flex = (alignItems: string, justifyContent: string) => `
display: flex;
align-items: ${alignItems};
justify-content: ${justifyContent};`;

export const Container = styled.div`
    ${flex("center", "center")}
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
    padding: 2rem 0;

    @media (min-width: 768px) {
        ${flex("center", "center")}
        flex-direction: row;
        justify-content: space-between;
        width: 70%;
        max-width: 90rem;
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

export const Table = styled.table`
    margin: auto;
    width: 100%;
    max-width: 500px;
    border-collapse: collapse;
    margin: 1rem 0rem;

    @media (min-width: 768px) {
        width: 50%;
        margin-bottom: 0;
    }
`;

export const TableRow = styled.tr`
    border-bottom: 1px solid #ddd;
`;

export const TableCell = styled.td`
    padding: 0.5rem 0;
    font-size: 0.6rem;
    color: #9c9c9c;

    &:first-child {
        width: 50%;
    }

    &:last-child {
        text-align: right;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;

    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        width: 70%;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
`;
