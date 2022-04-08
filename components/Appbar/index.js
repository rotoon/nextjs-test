import { AppBar, IconButton, Typography, Toolbar } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import { VscSettings } from "react-icons/vsc"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import { useRouter } from "next/router"

const Appbar = () => {
  const router = useRouter()
  const goBack = router.pathname !== "/"

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        {goBack ? (
          <IconButton
            id="btnGoback"
            color="white"
            edge="start"
            aria-label="Goback"
            onClick={() => router.back()}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        ) : (
          <IconButton edge="start" color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>
        )}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          {goBack ? "OKRs Report" : "All Reports"}
          <IconButton size="small" edge="end" color="inherit" aria-label="home">
            <ArrowDropDownIcon />
          </IconButton>
        </Typography>
        <IconButton edge="end" color="inherit" aria-label="setting">
          <VscSettings />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Appbar
