import { List, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from '../theme/index';
import '@fontsource/montez'
import IconButton from '@mui/material/IconButton'

//container
export const AppbarContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent:"space-between",
    marginTop: 4,
    padding:'2px 8px'
}))

//Header
export const AppbarHeader = styled(Typography)(() => ({
    padding:'4px',
    flexGrow:1,
    color: Colors.secondary,
    fontFamily:'"Montez","cursive"',
    fontSize:'4em'

}))

export const MyList = styled(List)(({type}) => ({
  display:type === 'row' ? 'flex' : 'block',
  flexGrow:3,
  justifyContent: 'center',
  alignItems:'center'
}))

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: 'flex',
  backgroundColor: Colors.shaft,
  position:'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  alignItems: 'center',
  zIndex:99,
  borderTop: `1px solid ${Colors.border}`
}))

export const ActionIconsContainerDesktop = styled(Box)(() => ({ 
  flexGrow:0,
}))

export const DrawerCloseButton = styled(IconButton)(() => ({
  position:'absolute',
  top: 10,
  left:'250px',
  zIndex:1999,
}))