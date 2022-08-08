import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {  AppbarContainer, AppbarHeader } from "../../styles/appbar";
import { MyList} from '../../styles/appbar/index';
import SearchIcon from '@mui/icons-material/Search'
import Actions from "./actions";

export default function AppbarDesktop({ matches }) {



  return (
    <AppbarContainer>
      <AppbarHeader>My Cart</AppbarHeader>
      <MyList type='row'>
        <ListItemText primary='Home' />
        <ListItemText primary='Categories' />
        <ListItemText primary='Products' />
        <ListItemText primary='Contact us' />
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