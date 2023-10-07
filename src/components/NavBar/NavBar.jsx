import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Language } from "@mui/icons-material";
//
const NavBar = ({ routes, langInfo }) => {
  const toggleLangPair = (event, value) => {
    langInfo.setValue(value);
  };
  const [navMenuAnchor, setNavMenuAnchor] = useState(null);
  const onOpenNavMenu = (event) => {
    setNavMenuAnchor(event.currentTarget);
  };
  const onCloseNavMenu = () => {
    setNavMenuAnchor(null);
  };
  //
  return (
    <AppBar position="static">
      <Toolbar>
        <Language sx={{ mr: 1, display: { xs: 'none', md: 'flex' } }} />
        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
          <IconButton
            size="large"
            aria-label="navigation menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={onOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={navMenuAnchor}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            open={Boolean(navMenuAnchor)}
            onClose={onCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {routes.map((route) => (
              <MenuItem key={route.path}
                onClick={onCloseNavMenu}
                component={NavLink} to={route.path}>
                <Typography textAlign="center">{route.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
          <Button sx={{ color: 'inherit' }}
            component={NavLink} to='/'>
            Lang App
          </Button>
        </Box>
        <Typography sx={{ color: 'inherit', pr: 4, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          Lang App
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {routes.map((route) => (
            <Button key={route.path}
              component={NavLink} to={route.path}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {route.name}
            </Button>
          ))}
        </Box>
        <ToggleButtonGroup
          exclusive variant="outlined" size="small"
          value={langInfo.value} onChange={toggleLangPair}>
          {langInfo.values.map((pair) =>
            <ToggleButton key={pair.key} value={pair}>{pair.name}</ToggleButton>
          )}
        </ToggleButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar