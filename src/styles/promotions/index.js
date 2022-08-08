
import { styled } from '@mui/material';
import { Box } from '@mui/system';
import { Colors } from '../theme/index';

export const PromotionsContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    padding: '40px 0px 40px 0px'
  },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 0px 20px 0px',
  overflow: 'hidden',
  backgroundColor: Colors.secondary
}))

export const MessageText = styled(Box)(({ theme }) => ({
  fontFamily: '"Montez","cursive"',
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
  color: Colors.black,
  fontSize: '1.5rem',
}))