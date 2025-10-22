"use client"
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { MdMenu } from "react-icons/md";
import { Divider, ListItem, useTheme } from "@mui/material";
import { grey, pink } from "@mui/material/colors";
import { BiArrowFromLeft, BiArrowToRight } from "react-icons/bi";
import Link from "next/link";

const MyNavbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [{ label :   "Accueil" , to  : '/'},
                   { label : "Services" , to : "/services"}, 
                   { label :  "Blog" , to :'/blog'}, 
                   { label : "À propos" , to : "/apropos" }];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontFamily: "Poppins" , color : theme.palette.primary.main }}>
        Clinique Éclat
      </Typography>
      <Divider />
      <List sx={{display : 'flex' , flexDirection : "column" , gap :4 , alignItems : "center" , mt:4}}>
        {navItems.map((item) => (
               <Link href={item.to} style={{ color: grey[600] , textDecoration : "none"  , textAlign : "center" }}>
               {/* <Button
               
                 key={item.label}
                 sx={{
                   fontFamily: "Poppins",
                  ,
                   textTransform: "none",
                   "&:hover": { color: theme.palette.primary.main , bgcolor : 'transparent' },
                 }}
               > */}
               {/* <ListItem sx={{textAlign : 'center' , my: 2}}> */}

                 {item.label}
               {/* </ListItem> */}
               {/* </Button> */}
             </Link>
         
        ))}

        <Link href={'/contact'}>
              <Button
                  endIcon={<BiArrowToRight />}
                  variant="outlined"
                  color="secondary"
                  sx={{
                    fontFamily: "Poppins",
                    // color: "#d17b88",
                    textTransform: "none",
                    // "&:hover": { color: "#d17b88"  },
                  }}
                >
                  Contact 
              </Button>
        </Link>

      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
          fontFamily: "Poppins",
          boxShadow: "none",
          borderBottom: "1px solid #eee",
          // , position : 'fixed' , top : 0 , 
          py : 1,
          px : { md : 4 , xs : 1} ,
          zIndex : 9
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between"  }}>
          {/* LOGO */}
          <Typography

            variant="h6"
            sx={{
              fontFamily: "Poppins",
              fontWeight: 600,
              letterSpacing: 1,
              color : theme.palette.primary.main
            }}
          >
            Clinique Éclat
          </Typography>

          {/* NAV ITEMS DESKTOP */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 6 ,  alignItems : "center" }}>
            {navItems.map((item) => (
              <Link href={item.to} style={{ color: grey[600] , textDecoration : "none"  }}>
                {/* <Button
                
                  key={item.label}
                  sx={{
                    fontFamily: "Poppins",
                   ,
                    textTransform: "none",
                    "&:hover": { color: theme.palette.primary.main , bgcolor : 'transparent' },
                  }}
                > */}
                  {item.label}
                {/* </Button> */}
              </Link>
            ))}

              <Link href={'/contact'}>

       


                <Button
                endIcon={<BiArrowToRight />}
                variant="contained"
                color="primary"
                sx={{
                  fontFamily: "Poppins",
                  // color: "#d17b88",
                  textTransform: "none",
                }}
              >
                Contact 
              </Button>

              </Link>


          </Box>

          {/* MOBILE MENU ICON */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MdMenu />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* DRAWER MOBILE */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { width: 240, fontFamily: "Poppins" },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default MyNavbar;
