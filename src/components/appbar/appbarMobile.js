import { IconButton } from "@mui/material";
import { AppbarContainer } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu"
import  SearchIcon  from '@mui/icons-material/Search';
import { AppbarHeader } from "../../styles/appbar";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
//This component shows the navbar of the mobile screen
export default function AppbarMobile(matches) {
    const {setDrawerOpen} = useUIContext(); 
    return (
        <AppbarContainer>
            <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <AppbarHeader textAlign={'center'} variant='h4'>
                My Cart
            </AppbarHeader>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <Actions matches={matches}/>
        </AppbarContainer>
    )
}