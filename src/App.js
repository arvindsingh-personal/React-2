import './App.css';
import { ThemeProvider } from '@mui/system';
import { Container } from '@mui/material';
import { useEffect} from 'react';
import theme from './styles/theme/index';
import Appbar from './components/appbar';

import Footer from './components/footer';
import AppDrawer from './components/drawer/index';
import { UIProvider } from './context/ui/index';
import { Route, Routes } from 'react-router-dom';
import Home from './components/products/Home';
import Cart from './components/cart/Cart';


function App() {

  useEffect(() => {
    document.title = 'Shopping Cart';
  }, []);

  return (
    <ThemeProvider theme={theme} >
      <Container
        maxWidth='xl'
        sx={{
          background: '#fff'
        }}
      >
        <UIProvider>
        <Appbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        <Footer />
        <AppDrawer />
        </UIProvider>
        
      </Container>

    </ThemeProvider>

  );
}

export default App;
