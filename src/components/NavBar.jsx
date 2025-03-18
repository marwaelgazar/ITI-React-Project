import { Link, useLocation } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

const NavBar = () => {
  const favoritesCount = useSelector((state) => state.favorites.length);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

   const hideNavBar = location.pathname === "/" || location.pathname === "/login";

  const toggleDrawer = () => {
    setOpen(!open);
  };

  if (hideNavBar) return null;  
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#222" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <span style={{ fontSize: "1.5rem" }}>🎬Movie App🍿</span>  
            </Link>
          </Typography>
          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={open} onClose={toggleDrawer}>
                <List>
                  {[
                    { text: "Home", path: "/films" },
                    { text: `Favourites (${favoritesCount})`, path: "/favourites", icon: <FaHeart style={{ color: "red", marginLeft: "5px" }} /> },
                    { text: "About Us", path: "/about" },
                    { text: "Contact Us", path: "/contact" },
                  ].map(({ text, path, icon }) => (
                    <ListItem button key={text} onClick={toggleDrawer}>
                      <Link to={path} style={{ textDecoration: "none", color: "black", width: "100%" }}>
                        <ListItemText primary={text} />
                        {icon}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <>
              <Link to="/films" style={{ textDecoration: "none", color: "white", marginRight: "15px" }}>
                Home
              </Link>
              <Link to="/favourites" style={{ textDecoration: "none", color: "white", marginRight: "15px" }}>
                Favourites <FaHeart style={{ color: "red" }} /> ({favoritesCount})
              </Link>
              <Link to="/about" style={{ textDecoration: "none", color: "white", marginRight: "15px" }}>
                About Us
              </Link>
              <Link to="/contact" style={{ textDecoration: "none", color: "white" }}>
                Contact Us
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
