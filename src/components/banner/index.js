
import { useTheme } from '@mui/material/styles';
import { Typography, useMediaQuery } from '@mui/material';
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton } from '../../styles/banner';
import { BannerTitle } from '../../styles/banner/index';



//This component shows a section of the website that is containing a doggu image and NEW SHOP Tag
export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <BannerContainer theme={theme}>
      <BannerImage src='/images/banner/dog.png' />
      <BannerContent>
        <Typography variant='h6'>Products</Typography>
        <BannerTitle variant='h2'>New Shop</BannerTitle>
        <BannerDescription variant='subtitle'>
          lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipiscing
        </BannerDescription>
        <BannerShopButton variant='contained' color='primary' >Shop Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  )
}