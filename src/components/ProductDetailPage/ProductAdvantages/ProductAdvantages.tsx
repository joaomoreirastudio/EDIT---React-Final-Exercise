import React from "react";

import {
    Container,
    Section,
    VideoContainer,
    TextContainer,
    Features,
} from "./ProductAdvantages.styled";
import DurableVideo from "/assets/products/product-video-1.mp4";
import SpillsVideo from "/assets/products/product-video-2.mp4";

const ProductAdvantages = () => (
    <>
        <Container>
            <Section>
                <VideoContainer>
                    <video src={DurableVideo} autoPlay muted loop />
                </VideoContainer>
                <TextContainer>
                    <h2>Durable enough for everyday drama</h2>
                    <p>
                        Each and every component of our furniture is selected
                        for durability, from the galvanized steel latches to the
                        precision-milled Baltic Birch frame. The fabric is
                        inherently scratch-resistant, thanks to an incredibly
                        tight weave, which makes it perfect for pets and their
                        parents.
                    </p>
                    <Features>
                        <div>
                            <p>Low carbon footprint</p>
                            <span>Fabric made from upcycled materials</span>
                        </div>
                        <div>
                            <p>Sustainable wood</p>
                            <span>
                                Sourced from responsibly managed forests
                            </span>
                        </div>
                    </Features>
                </TextContainer>
            </Section>
            <Section className="MobileHide">
                <TextContainer>
                    <h2>Don't sweat the spills</h2>
                    <p>
                        Our olefin fabric is stain-resistant thanks to a deep
                        dyeing process that colors each individual strand to the
                        core, as opposed to other fibers that have little pores
                        that absorb stains. You can even spray spills with a
                        water and bleach solution (yes, we said bleach) and blot
                        it out to clean stains.
                    </p>
                    <Features>
                        <div>
                            <p>Non toxic</p>
                            <span>Zero chemical additives or treatments</span>
                        </div>
                        <div>
                            <p>Zero PFCs</p>
                            <span>Fabric free of dangerous formaldehydes</span>
                        </div>
                    </Features>
                </TextContainer>
                <VideoContainer>
                    <video src={SpillsVideo} autoPlay muted loop />
                </VideoContainer>
            </Section>
        </Container>
    </>
);

export default ProductAdvantages;
