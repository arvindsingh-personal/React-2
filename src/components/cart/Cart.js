import { Box, Divider, Grid, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useUIContext } from '../../context/ui';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from 'react-router-dom';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import AdbIcon from '@mui/icons-material/Adb';

//It shows the product image
export const Productimage = styled('img')(({ src, theme }) => ({
  src: `url(${src})`,
  width: '40%',
  height: '14vh',
  padding: '10px',
  [theme.breakpoints.down('md')]: {
    width: '90%',
    height: '10vh',
    padding: '14px',
  }
}));

const StyledTypography = styled(Typography)`
  font-size:25px
`
// This component shows the cart page
const Cart = () => {
  const { cartProducts, setCartProducts, setItemNumber } = useUIContext();
  const [T, setT] = useState(0);
  const navi = useNavigate();
//It will run every time when any thing changes in tha cartProducts array
  useEffect(() => {
    TotalPrice();
  }, [cartProducts]);
//It calculates the total price of all the items of the cart
  const TotalPrice = () => {
    let temp = 0;
    cartProducts.map((item) => {
      temp += Number(item.subTotal);
    });
    temp = temp.toFixed(2)
    setT(temp);
  }
  // It will decrease the quantity
  const decrease = (index1) => {
    let temp = [...cartProducts];
    if (temp[index1].quantity === 1) {
      temp.splice(index1, 1);
      setItemNumber(num => num - 1);
      alert('Item has been deleted from cart')
    }
    else {
      temp[index1].quantity -= 1;
      temp[index1].subTotal = temp[index1].price * temp[index1].quantity;
      temp[index1].subTotal = temp[index1].subTotal.toFixed(2);
    }
    setCartProducts(temp);
  }
   // It will increase the quantity
  const increase = (index1) => {
    let temp = [...cartProducts];
    temp[index1].quantity += 1;
    temp[index1].subTotal = temp[index1].price * temp[index1].quantity;
    temp[index1].subTotal = temp[index1].subTotal.toFixed(2);
    setCartProducts(temp);
  }
   // It will clear all the cart products
  const ClearAll = () => {
    setCartProducts([]);
    setItemNumber(0)
  }
   // It will Place your order
  const PlaceOrder = () => {
    alert("Your Order has been placed Successfully!");
    setCartProducts([]);
    setItemNumber(0);
    navi('/');
  }
  return (
    <>
      {cartProducts.length > 0 ?
        <Box justifyContent='center' sx={{ flexGrow: 1, pt: 8, alignItems: 'center', textAlign: 'center', height: '100%', width: '100%', minHeight: '80vh' }} >
          <Grid container spacing={2} justifyContent='space-between' backgroundColor="#d1adcc" sx={{ height: 70, width: '100%' }}>
            <Grid item md={3}>Product Name</Grid>
            <Grid item md={3}>Price</Grid>
            <Grid item md={3}>Quantity</Grid>
            <Grid item md={3}>Subtotal</Grid>
          </Grid>
          {cartProducts.map((item, index) => (
            <>
              <Grid container spacing={2} justifyContent='space-between' sx={{ mt: 2 }}>
                <Grid item md={3} ><Productimage src={item.image} /><StyledTypography>{item.category}</StyledTypography></Grid>
                <Grid item md={3}><StyledTypography>$ {item.price}</StyledTypography></Grid>
                <Grid item md={3} sx={{ ml: 0 }}><RemoveIcon sx={{ border: '1px solid gray' }} onClick={() => decrease(index)} /> <span style={{ paddingLeft: '2px', paddingRight: '2px', fontSize: '25px' }}>
                  {item.quantity}</span > <AddIcon sx={{ border: '1px solid gray' }} onClick={() => increase(index)} /></Grid>
                <Grid item md={3}><StyledTypography>$ {item.subTotal}</StyledTypography></Grid>
              </Grid>
              <Divider />
            </>
          ))}
          <Grid container sx={{ fontSize: '30px', mt: 8, mb: 7 }} >
            <Grid item md={3}></Grid>
            <Grid item md={6} display="flex"><Typography sx={{ fontSize: '30px' }}>Total</Typography><TrendingFlatIcon sx={{ fontSize: '45px' }} /></Grid>

            <Grid item md={3}>{T}</Grid>
          </Grid>
          <Grid container justifyContent="space-between"
            sx={{ mt: 0 }}>
            <Grid item md={2} display="flex" sx={{ background: '#E3E3E3', color: '#763D6F', p: 2, cursor: 'pointer' }} onClick={() => navi('/')}> <KeyboardBackspaceIcon /><Typography>Continue Shopping</Typography></Grid>
            <Grid item md={6}></Grid>
            <Grid item md={1} display="flex" sx={{ background: '#E3E3E3', color: '#763D6F', p: 2, cursor: 'pointer' }} onClick={ClearAll}><DeleteOutlineIcon />Clear All</Grid>
          </Grid>
          <Divider sx={{ mb: 4, backgroundColor: '#37D8F3' }} />
          <button style={{ padding: '20px', margin: 79, fontSize: '20px', fontWeight: 'bold', border: 'none', backgroundColor: '#A5679D', color: '#fff', cursor: 'pointer' }} onClick={PlaceOrder}>Place Order</button>
        </Box>
        :
         <Box textAlign="center" height={900} 
         sx={{backgroundImage: "linear-gradient(to right top, #d1adcc, #d8b9d6, #e0c5df, #e7d1e9, #efddf2)"}} >
          <AdbIcon sx={{ mt:25, fontSize:'20rem',color:'#9A7896'}} />
          <Typography sx={{fontSize:'40px'}}>Empty Cart</Typography>
          <button style={{ padding: '20px', margin: 79, fontSize: '20px', fontWeight: 'bold', border: 'none', backgroundColor: '#713569', color: '#fff', cursor: 'pointer' }} 
          onClick={()=>navi('/')}>Continue to shop</button>
         </Box>
        }
    </>
  )
}

export default Cart