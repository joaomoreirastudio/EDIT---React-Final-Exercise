import React from "react";
import {
    Container,
    Title,
    Table,
    TableRow,
    TableCell,
    ImageWrapper,
    Image,
} from "./ProductDimensions.styled";
import SofaDimensions from "/assets/products/product-details-2.png";

const ProductDimensions = () => {
    const dimensions = [
        { label: "General Dimensions", value: '86" L x 61" D x 33" H' },
        { label: "Seat Height", value: '17"' },
        { label: "Arm Height", value: '23"' },
        { label: "Chaise Length", value: '13"' },
        { label: "Seat Depth", value: '134"' },
        { label: "Chaise Seat Depth", value: '11"' },
        { label: "Leg Height", value: '7"' },
        { label: "Ottoman Dimensions", value: '26" L x 26" W x 17" H' },
    ];

    return (
        <>
            <Title>Dimensions</Title>
            <Container>
                <Table>
                    <tbody>
                        {dimensions.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.label}</TableCell>
                                <TableCell>{item.value}</TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
                <ImageWrapper>
                    <Image src={SofaDimensions} alt="sofa with dimensions" />
                </ImageWrapper>
            </Container>
        </>
    );
};

export default ProductDimensions;
