
import { useTheme } from '@mui/material/styles';
import { Typography, useMediaQuery } from '@mui/material';
import { BannerContainer, BannerContent, BannerDescription, BannerImage } from '../../styles/banner';
import { BannerTitle } from '../../styles/banner/index';
export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <BannerContainer theme={theme}>
            <BannerImage src='/images/banner/shop_online.webp' />
            <BannerContent>
                <Typography variant='h6'>Products...</Typography>
                <BannerTitle >New Colledfdfsctions</BannerTitle>
                <BannerDescription>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipiscing
                </BannerDescription>
            </BannerContent>
        </BannerContainer>
    )
}