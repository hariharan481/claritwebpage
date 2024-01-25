import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import logo from "../assest/logo.mp4";

import {
  Add,
  Close,
  AccountCircleSharp,
  ArrowForwardIos,
  ArrowDownward,
  Search,
  SportsCricket,
} from "@mui/icons-material";
import {
  Link as RouterLink,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { createMuiTheme, createTheme } from "@mui/material";
import CustomButton from "./CustomButton";

const drawerWidth = "100%";
const navItems = [
  "PremierLeague",
  "Fantasy",
  "Football&community",
  "About",
  "More",
];

const theme = createTheme({});
function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "black",
      }}
    >
      <Box sx={{ textAlign: "start", marginTop: "10px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <Box>
            <Button sx={{ color: "white", gap: "30px" }}>
              <AccountCircleSharp />
              <Typography variant="h6" color={"white"} textTransform={"none"}>
                sign in
              </Typography>
            </Button>
          </Box>
          <IconButton
            color="inherit"
            aria-label="close drawer"
            onClick={handleDrawerToggle}
          >
            <Close size="40px" sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "start",
                "&:hover": {
                  color: "white",
                  fontSize: "40px",
                },
              }}
            >
              {index === 0 && (
                <>
                  <Typography
                    variant="h6"
                    color="grey"
                    sx={{
                      marginRight: "10px",
                      "&:hover": {
                        color: "white",
                      },
                    }}
                  >
                    ai pin
                  </Typography>
                  <ArrowForwardIos sx={{ width: "20px" }} color="white" />
                </>
              )}
              {index === 2 && (
                <>
                  <Typography
                    variant="h6"
                    color="grey"
                    sx={{
                      marginRight: "10px",
                      "&:hover": {
                        color: "white",
                      },
                    }}
                  >
                    join Us
                  </Typography>
                  <ArrowForwardIos sx={{ width: "20px" }} color="white" />
                </>
              )}
              {index !== 0 && index !== 2 && (
                <ListItemText
                  primary={item}
                  sx={{
                    color: isSmallScreen ? "grey" : "white",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {" "}
      <Router>
        {" "}
        <Box sx={{ display: "flex" }}>
          <CssBaseline />

          <AppBar
            elevation={0}
            position={isSmallScreen ? "fixed" : "sticky"}
            sx={{
              bottom: isSmallScreen ? "auto" : 0,
              background: "#74ac99 ",
              height: "60px",
              display: "flex",
              borderTop: "0.5px solid white",
              top: isSmallScreen ? 0 : "auto",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Toolbar
              sx={{
                alignItems: "center",
                textAlign: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                src="https://resources.cricket-australia.pulselive.com/cricket-australia/document/2022/10/25/bdb5b713-9bb9-40c9-aefd-84b51f0b1b20/CricketAustraliaLogoWhiteWide.svg"
                style={{
                  height: "30px",
                  marginLeft: "-1%",
                  display: "flex",
                }}
                alt="Logo"
              />

              <Box
                sx={{
                  display: { xs: "none", sm: "block" },

                  flexGrow: 1, // Take up remaining space
                  textAlign: "center",
                }}
              >
                <Button
                  href="/home"
                  endIcon={<ArrowDropDownIcon />}
                  key="more"
                  sx={{
                    color: isSmallScreen ? "white" : "white",
                    fontSize: "17px",
                    fontFamily: "monospace",
                    textTransform: "none",
                    fontWeight: 900,
                    margin: "0 13px",
                    position: "relative",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  Home
                </Button>
                <Button
                  href="/venuse"
                  endIcon={<ArrowDropDownIcon />}
                  key="PremierLeague"
                  sx={{
                    color: isSmallScreen ? "white" : "white",
                    fontSize: "17px",
                    fontFamily: "monospace",
                    textTransform: "none",
                    fontWeight: 900,
                    margin: "0 13px",
                    position: "relative",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  venues
                </Button>
                <Button
                  href="/teams"
                  endIcon={<ArrowDropDownIcon />}
                  key="fantacy"
                  sx={{
                    color: isSmallScreen ? "white" : "white",
                    fontSize: "17px",
                    fontFamily: "monospace",
                    textTransform: "none",
                    fontWeight: 900,
                    margin: "0 13px",
                    position: "relative",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  Teams
                </Button>
              </Box>

              {isSmallScreen && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ ml: "auto" }}
                >
                  {mobileOpen ? (
                    <Close size="40px" sx={{ color: "white" }} />
                  ) : (
                    <Add size="40px" sx={{ color: "grey" }} />
                  )}
                </IconButton>
              )}

              <Button
                disableElevation
                disableFocusRipple
                variant="contained"
                sx={{
                  color: "black",
                  gap: "10px",
                  fontSize: "17px",
                  fontFamily: "monospace",
                  textTransform: "none",
                  fontWeight: 900,
                  backgroundColor: "#ed8a11",

                  borderRadius: "20px",
                }}
              >
                <SportsCricket />
                Sign In
              </Button>

              {/* Search icon */}
              <IconButton sx={{ color: "white" }}>
                <Search />
              </IconButton>
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  top: 0,
                  backgroundColor: "#8338e3",
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </Box>
      </Router>
    </>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
