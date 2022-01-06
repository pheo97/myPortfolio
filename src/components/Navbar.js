import React from 'react'
import '../App.css'
import AppBar from '@mui/material/AppBar'
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
      <div className="Navbar">
       <AppBar position="sticky">
        <Toolbar>
        <IconButton
              size="large"
              edge="start"
              color="warning"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link to="/">Myprofile</Link>
            </IconButton>
            <Typography variant="h6" color="transparent" component="div" sx={{ flexGrow: 1 }}>
              Profile
            </Typography>
            <Link to="/About">About</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
        </Toolbar>
       </AppBar>
      </div>
    )
}

export default Navbar
