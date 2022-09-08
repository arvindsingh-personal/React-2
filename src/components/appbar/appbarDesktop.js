import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {  AppbarContainer, AppbarHeader } from "../../styles/appbar";
import { MyList} from '../../styles/appbar/index';
import SearchIcon from '@mui/icons-material/Search'
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import { useNavigate } from "react-router-dom";
//This component shows the navbar of the Desktop screen
export default function AppbarDesktop({ matches }) { 
  const navi = useNavigate();
  return (
    <AppbarContainer>
      <AppbarHeader>My Cart</AppbarHeader>
      <MyList type='row'>
        <ListItemText primary='Home' sx={{cursor: 'pointer'}} onClick={()=>navi('/')} />
        <ListItemText primary='Categories' sx={{cursor: 'pointer'}} />
        <ListItemText primary='Products' sx={{cursor: 'pointer'}} />
        <ListItemText primary='Contact us' sx={{cursor: 'pointer'}} />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions/>
    </AppbarContainer>
  )
}