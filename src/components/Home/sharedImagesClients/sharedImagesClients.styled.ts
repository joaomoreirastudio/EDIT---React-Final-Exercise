import styled from "styled-components";

const flex = (alignItems: string, justifyContent: string) => `
  display: flex;
  align-items: ${alignItems};
  justify-content: ${justifyContent};
`;

export const SharedImages__Container = styled.div`
    ${flex("center", "center")}
    flex-direction: column;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
    gap: 1rem;
    padding-bottom: 2rem;

    @media (min-width: 768px) {
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }
`;

export const SharedImg = styled.div`
    ${flex("flex-start", "flex-start")}
    flex: 0 0 calc(50% - 1rem);

    img {
        width: 100%;
        aspect-ratio: 1/1;
    }

    @media (min-width: 768px) {
        flex: 0 0 calc(30% - 1rem); /* Cada imagem ocupa 30% do contêiner menos a margem */
    }
`;

export const CarouselImages = styled.div`
    ${flex("flex-start", "center")}
    flex-wrap: wrap;
    transition: transform 0.5s ease-in-out; /* Adiciona transição suave */
    will-change: transform; /* Melhora a performance da animação */
    gap: 1rem;

    @media (min-width: 768px) {
        ${flex("flex-start", "flex-start")}
        transition: transform 0.5s ease-in-out; /* Adiciona transição suave */
        will-change: transform; /* Melhora a performance da animação */
        gap: 1rem;
        flex-wrap: nowrap;
        flex: 0 0 calc(80% - 1rem);
    }
`;

export const Carousel = styled.div`
    ${flex("flex-start", "flex-start")}
    flex-wrap: wrap;
    @media (min-width: 768px) {
        ${flex("flex-start", "flex-start")}
        width: 90%;
        overflow: hidden;
        width: 95%;
    }
`;
