import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/products";


export default function ProductMeta({product, matches}) {
    return (
        <ProductMetaWrapper >
            <Typography variant={matches ? 'h6' : 'h5'} lineHeight={1.2}>
                {product.category}
            </Typography>
            <Typography variant={matches ? 'caption' : 'h6'} lineHeight={2}>
                ${product.price}
            </Typography>
        </ProductMetaWrapper>
    )
}