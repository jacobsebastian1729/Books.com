import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import AppBar from '@mui/material/AppBar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Grid from "@mui/material/Grid";
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StyleIcon from '@mui/icons-material/Style';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';


export default function NavBar() {

  const navigate = useNavigate()

  const yourCart = useSelector((state: RootState) => state.cartList)

  const [isLogin, setIsLogin] = useState<boolean>(false)

  const userId = localStorage.getItem("userId")

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseLogOut = () => {
    setAnchorEl(null);
    localStorage.setItem("userId", '')
    navigate("/");
    window.location.reload();

  };

  const handleCloseMyaccount = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  

  useEffect(() => {
    if (userId === null || userId.length === 0) {
      setIsLogin(false)
    } else {
      setIsLogin(true)
    }
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx = {{backgroundColor: 'white', color: 'indigo'}}>
        <Grid container spacing={1} p={2}>
          <Grid
            item
            xs={2}
            //style={{ color: "white", backgroundColor: "blue" }}
          >
            <Link
    to= '/'
    className="link"
    style={{ textDecoration: "none", color: 'indigo'}}
    >
            <Toolbar variant="dense">
          
          <Typography variant="h5" color="inherit" component="div" fontWeight={900}>
            BOOKS.com
          </Typography>
        </Toolbar>
        </Link>
          </Grid>
        
        <Grid
            item
            xs={3.5}
           // style={{ color: "white", backgroundColor: "green" }}
          >
          <TextField sx = {{ml: 5, mt: .65, backgroudColor: 'red'}}
          
        id="input-with-icon-textfield"
        
        InputProps={{
          //disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
        color="secondary"
        
      />
          </Grid>
        <Grid
            item
            xs={4}
           // style={{backgroundColor: "red" }}
          ></Grid>
          <Grid
            item
            xs={2.5}
           // style={{ backgroundColor: "yellow" }}
          >
            <Box sx={{ flexGrow: 1 }} />
          <Box justifyContent="flex-end" sx={{ display: { xs: 'none', md: 'flex' }, pr: 2 }}>
           
           <Link
    to= '/products'
    className="link"
    style={{ textDecoration: "none", color: 'indigo'}}
    
    >
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              
                <StyleIcon />
              
            </IconButton>
            </Link>
            <Link
    to= '/mycart'
    className="link"
    style={{ textDecoration: "none", color: 'indigo'}}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={yourCart.cartList.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            </Link>
            
      {
        isLogin?(
          <div>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    //aria-controls={menuId}
                    aria-haspopup="true"
                    //onClick={handleProfileMenuOpen}
                    color="inherit"
                    onClick={handleMenu}
                  >
                    <Avatar sx={{ bgcolor: deepPurple[500], width: .7, height: .7, fontSize: "1rem", padding:1 }}>N</Avatar>
                  </IconButton>
                  <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Link
    to= '/userinfo'
    className="link"
    style={{ textDecoration: "none"}}
    >
                  <MenuItem onClick={handleCloseMyaccount}>My account</MenuItem>
                  </Link>
                  <MenuItem onClick={handleCloseLogOut}>LogOut</MenuItem>
                </Menu>
                </div>
                  ):(<Link
          to= '/login'
          className="link"
          style={{ textDecoration: "none", color: 'indigo'}}
          >
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    //aria-controls={menuId}
                    aria-haspopup="true"
                    //onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  </Link>)
      }

            
          </Box>
          </Grid>

      </Grid>
      </AppBar>
    </Box>
  );
}