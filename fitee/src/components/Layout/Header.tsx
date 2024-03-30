import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Workouts", path: "/app/workouts" },
  { label: "Statistics", path: "/statistics" },
];

export const Header = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Box>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};
