import  ShoppingCart  from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import  FavoriteIcon  from "@mui/icons-material/Favorite";
import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { ActionIconsContainerMobile, MyList } from "../../styles/appbar";
import { ActionIconsContainerDesktop } from '../../styles/appbar/index';
import { Colors } from '../../styles/theme/index';

export default function Actions({matches}) {

const Component = matches
? ActionIconsContainerMobile
: ActionIconsContainerDesktop;

  return (
    <Component>
    <MyList type="row">
      <ListItemButton
      sx={{ justifyContent: 'center'}}
      >
        <ListItemIcon
        sx={{display:'flex',
        justifyContent: 'center',
        color: matches && Colors.secondary}}
        >
          <ShoppingCart />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />
      <ListItemButton
      sx={{ justifyContent: 'center'}}
      >
        <ListItemIcon 
        sx={{display:'flex',
          justifyContent: 'center',
        color: matches && Colors.secondary}}
        >
          <FavoriteIcon />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />
      <ListItemButton 
      sx={{justifyContent: 'center'
    }}
      >
        <ListItemIcon
        sx={{display:'flex',
          justifyContent: 'center',
        color: matches && Colors.secondary}}
        >
          <PersonIcon />
        </ListItemIcon>
      </ListItemButton>
    </MyList>
    </Component>
  )
}