import styled from "styled-components";

const flex = (alignItems: string, justifyContent: string) => `
  display: flex;
  align-items: ${alignItems};
  justify-content: ${justifyContent};
`;

const ModularVideo__Section = styled.div`
    ${flex("center", "center")}
    flex-direction: column;
    padding-bottom: 2rem;
    .btn {
        background-color: #fced70;
        border: none;
        padding: 1rem;
        border-radius: 0.25rem;
    }
`;

const ModularVideo__Container = styled.div`
    width: 95%;
    padding-bottom: 1rem;

    video {
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
    @media screen and (min-width: 768px) {
        width: 100%;
        height: 25rem;
        video {
            height: 100%;
            object-fit: cover;
        }
    }
`;

export { ModularVideo__Section, ModularVideo__Container };
