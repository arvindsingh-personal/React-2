
import styled from 'styled-components';
import { TextField, Typography } from '@mui/material';
import { Colors } from '../theme/index';


export const FooterTitle = styled(Typography)(()=> ({
    textTransform: 'uppercase',
    marginBottom:'1em' 
}))

export const Subscribe = styled(TextField)(() => ({
    '.MuiInputLabel-root': {
        color: Colors.secondary
    },
    '.MuiInput-root::before': {
      borderBottom: `1px solid ${Colors.secondary}`
    },
}))