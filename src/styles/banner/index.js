import { List, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from '../theme/index';
export const BannerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: 'space-evenly',
  width: '100%',
  height: '100%',
  padding: '0px 0px',
  background: Colors.light_gray,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

export const BannerImage = styled('img')(({src, theme}) => ({
  src: `url(${src})`,
  width: '500px',
  [theme.breakpoints.down('md')]: {
    width: '350px', },
    [theme.breakpoints.down('sm')]: {
      width:'420px',
      height: '300'
    }
}))

export const BannerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth:420,
  padding: '30px'
}))

export const BannerTitle = styled(Typography)(({theme}) => ({
lineHeight:1.5,
fontSize:'50PX',
marginTop:'20px',
[theme.breakpoints.down('md')]: {
  fontSize: '37px'
}
}));

export const BannerDescription = styled(Typography)(({theme}) => ({
  lineHeight:1.25,
  letterSpacing: 1.25,
  marginBottom:'3em',
  [theme.breakpoints.down('md')]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom:'1.5em'
  }
}))
