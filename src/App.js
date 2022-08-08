import './App.css';
import { ThemeProvider } from '@mui/system';
import { Container, Button} from '@mui/material';
import { useEffect, useState } from 'react';
import theme from './styles/theme/index';
import Appbar from './components/appbar';
import Banner from './components/banner';
import { PromotionsContainer } from './styles/promotions/index';


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
        <Appbar/>
        <Banner />
      </Container>
      <PromotionsContainer />
    </ThemeProvider>

  );
}

export default App;
