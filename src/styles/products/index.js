
import { Button, styled } from '@mui/material';
import { Box } from '@mui/system';
import { Colors } from '../theme/index';
import {IconButton} from '@mui/material';
import { slideInBottom } from '../../animations';
import { slideInRight } from '../../animations/index';


export const Product = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    // position: 'relative',
  }
}));

export const Productimage = styled('img')(({ src, theme }) => ({
  src: `url(${src})`,
  width: '100%',
  height: '40vh',
  background: Colors.light_gray,
  padding: '10px',
  [theme.breakpoints.down('md')]: {
    width: '90%',
    height: '10vh',
    padding: '14px',
  }
}));

export const ProductActionButton = styled(IconButton)(() => ({
  background: Colors.white,
  margin:4
}))

export const ProductFavButton = styled(ProductActionButton)(({fav, theme}) => ({
 color: fav ? Colors.primary : Colors.light,
 [theme.breakpoints.down('md')]: {
  position:'absolute',
  right:0,
  top:0
 }
}));

export const ProductAddToCart = styled(Button)(({show, theme}) => ({
    width:'200px',
    fontSize: '12px',
    [theme.breakpoints.down('md')]: {
      // position:'absolute',
      bottom:'2%',
      width: '150px',
      padding:'10px 5px',
      animation: show && `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    },
      background: Colors.secondary,
      opacity:0.9,
}))

export const ProductMetaWrapper = styled(Box)(({theme}) => ({
  padding: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const ProductActionWrapper = styled(Box)(({ show, theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: show ? 'visible' : 'none',
    position:'absolute',
    right: 0,
    top: '20%',
    animation: show && `${slideInRight}  0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both `
  }
}))