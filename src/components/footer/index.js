
import { Box } from '@mui/system';
import { Grid, Container, Typography, ListItemText, Stack, Button } from '@mui/material';
import { FooterTitle, Subscribe } from '../../styles/footer/index';
import { Colors } from '../../styles/theme/index';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { List } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'

//This component is responsible for the Footer of the page
export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: Colors.shaft,
        color: Colors.white,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '14px' }
      }}
    >
      <Grid container spacing={2} justifyContent="center" >
        <Grid item md={6} lg={4}>
          <FooterTitle variant='body1'>About us</FooterTitle>
          <Typography variant='caption2' lg={4}>
            lorem ipsum dolor sit amet, consectetur adipiscing ipsum dolor sit amet, consectetur adipiscing elit lorem dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,

            }}
          >
            <Facebook sx={{ mr: 1 }} />
            <Twitter sx={{ mr: 1 }} />
            <Instagram />
          </Box>
        </Grid>

        <Grid item md={6} lg={2}>
          <FooterTitle variant='body1'>Information</FooterTitle>
          <List>
            <ListItemText lineHeight={2} variant='caption2'>
              <Typography>About us</Typography>
            </ListItemText>
            <ListItemText lineHeight={2} variant='caption2'>
              <Typography>Order Tracking</Typography>
            </ListItemText>
            <ListItemText lineHeight={2} variant='caption2'>
              <Typography>Privacy &amp; Policy</Typography>
            </ListItemText>
            <ListItemText lineHeight={2} variant='caption2'>
              <Typography>Terms &amp; Conditions </Typography>
            </ListItemText>
          </List>
        </Grid>

       <Grid item md={6} lg={2}>
        <FooterTitle variant='body1'>My Acoount</FooterTitle>
        <List>
            <ListItemText lineHeight={2} variant='caption2'>
              <Typography>Login</Typography>
            </ListItemText>
            <ListItemText lineHeight={2} variant='caption2'>
              <Typography>Sign up</Typography>
            </ListItemText>
            <ListItemText lineHeight={2} variant='caption2'>
              <Typography>Create Account</Typography>
            </ListItemText>
            <ListItemText lineHeight={2} variant='caption2'>
              <Typography>Whishlist </Typography>
            </ListItemText>
          </List>
       </Grid>
       <Grid item md={6} lg={2}>
        <FooterTitle variant='body1'>NewsLatter</FooterTitle>
          <Stack >
            <Subscribe
            color='primary'
            label="Email Address"
            variant='standard'
            />
            <Button
            startIcon={<SendIcon />}
            sx={{mt:4, mb:4}}
            variant='contained'
            >
            Subscribe
            </Button>

          
          </Stack>
       </Grid>
      </Grid>
    </Box>
  )
}