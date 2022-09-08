
import { Stack } from '@mui/material';
import { Product, ProductActionButton, ProductActionWrapper, ProductAddToCart, ProductFavButton, Productimage } from '../../styles/products/index';
import ProductMeta from './ProductMeta';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FitScreenIcon from '@mui/icons-material/FitScreen'
import ShareIcon from '@mui/icons-material/Share'
import { useUIContext } from '../../context/ui';

export default function SingleProduct({ product, cartProducts, setCartProducts, matches }) {
  let flag = true;
  const { setItemNumber } = useUIContext();
  let temp = [];
  const Add = () => {
    if (cartProducts.length < 1) {
      temp['id'] = product.id;
      temp['image'] = product.image;
      temp['category'] = product.category;
      temp['price'] = product.price;
      temp['quantity'] = 1;
      temp['subTotal'] = product.price;
      setItemNumber(itemNumber => itemNumber += 1);
      setCartProducts(prevState => [...prevState, temp]);
    }

    else {
      cartProducts.map((item) => {
        if (item.id === product.id) {
          flag = false;
        }
      })
      if (flag === true) {
        temp['id'] = product.id;
        temp['image'] = product.image;
        temp['category'] = product.category;
        temp['price'] = product.price;
        temp['quantity'] = 1;
        temp['subTotal'] = product.price;
        setItemNumber(itemNumber => itemNumber += 1);
        setCartProducts(prevState => [...prevState, temp]);
      }

    }
  }
  return (
    <>
      <Product >
        <Productimage src={product.image} />
        <ProductMeta product={product} matches={matches} />
        <ProductActionWrapper>
          <Stack direction="row">
            <ProductFavButton fav={0} >
              <FavoriteIcon />
            </ProductFavButton>
            <ProductActionButton >
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
      </Product>
      <ProductAddToCart variant='contained' onClick={Add}>Add to Cart</ProductAddToCart>
    </>
  )
}