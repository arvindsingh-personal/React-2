import { Divider, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import styled from "styled-components";
import { useUIContext } from "../../context/ui";
import { DrawerCloseButton } from "../../styles/appbar";
import CloseIcon from '@mui/icons-material/Close'
import { useNavigate } from "react-router-dom";

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;
// This Component will show the side drawer on the Mobile device
export default function AppDrawer() {
  const {drawerOpen, setDrawerOpen} = useUIContext(); 
  const navi = useNavigate();
  return (
    <>
      {drawerOpen && 
      (<DrawerCloseButton onClick={() => setDrawerOpen(false)}>
        <CloseIcon
        sx={{
          fontSize: "2.5rem",
          color:'white'
        }}
        />
      </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        <List>
          <ListItemButton>
            <ListItemText onClick={()=>navi('/')} >Home</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>About us</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Contact us</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}