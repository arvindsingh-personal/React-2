import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import AppbarDesktop from "./appbarDesktop";
import AppbarMobile from "./appbarMobile";
//This component checks for if the screen is on a mobile device or on a Desktop device
export default function Appbar() {
  const theme = useTheme();
  const mathches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {mathches ? 
      <AppbarMobile mathches={mathches} /> : 
      <AppbarDesktop mathches={mathches} />}
    </>
  )
}