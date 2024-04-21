import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Hidden from "@mui/material/Hidden";

const navItems = [
  { label: "Home", path: "/app/home" },
  { label: "Workouts", path: "/app/workouts" },
  { label: "Statistics", path: "/app/statistics" },
  { label: "Nutrition", path: "/app/nutrition" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Hidden smDown>
            <Box sx={{ display: "flex", flexGrow: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  component={Link}
                  to={item.path}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Hidden>
          <Hidden mdUp>
            <Button color="inherit" onClick={toggleMenu}>
              Menu
            </Button>
          </Hidden>
        </Toolbar>
        {isMenuOpen && (
          <Box
            p={2}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                component={Link}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </AppBar>
    </Box>
  );
};
