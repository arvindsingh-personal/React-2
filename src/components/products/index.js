import { Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/system';
import SingleProduct from './SingleProduct';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import SingleProductDesktop from './SingleProductDesktop';
import { useUIContext } from '../../context/ui';


// This Component shows all the products on the home page by fectching it from the API
export default function Products() {
  const {cartProducts, setCartProducts} = useUIContext(); 
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `https://fakestoreapi.com/products/category/women's clothing`

  axios.get(url).then((response) => {
    setProducts(response.data)
    console.log(response.data)
  })
  },[])

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const renderProducts = products.map(product => (
    <Grid 
    item
     key={product.id} 
     xs={3}
     sm={4}
     md={4}
     display='flex'
     flexDirection={'column'}
      alignItems='center'
      >
      {matches ? <SingleProduct product={product} cartProducts ={cartProducts} setCartProducts={setCartProducts} matches={matches} />
      : <SingleProductDesktop  product={product} cartProducts ={cartProducts} setCartProducts={setCartProducts} matches={matches} />
    }
    </Grid>
  ))
  return (
    <Container >
      <Typography variant='h4' 
       textAlign='center' 
       margin={5}
       >Our Products</Typography>

      <Grid container
      spacing={{xs: 3, md: 3}}
        justifyContent={'center'}
        sx={{ margin: '20px 4px 10px 4px' }}
        columns={{xs: 4, sm: 8, md: 12}}
      >
        {renderProducts}
      </Grid>
    </Container>
  )
}