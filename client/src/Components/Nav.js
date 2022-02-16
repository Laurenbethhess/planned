import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

function Nav( { user, onSetUser } ) {
    const navigate = useNavigate();

    // function handleLogoutClick() {
    //     fetch("/logout", { method: "DELETE" }).then((r) => {
    //         if (r.ok) {
    //             onSetUser(null);
    //         }
    //         navigate('/')
    //     });
    // }

    return (
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Courier"}}>
                    {user?
                        <>Hello, {user.first_name} !</>
                    :
                        <></>
                    }  
                </Typography> */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Courier"}}>
                    <Link to="/">Main</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Courier"}}>
                    <Link to="/chores">Chores</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Courier"}}>
                    <Link to="/school">School</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Courier"}}>
                    <Link to="/work">Work</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Courier"}}>
                    <Link to="/exercise">Exercise</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Courier"}}>
                    <Link to="/misc">Misc</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Courier"}}>
                    <Link to="/groceries">Groceries</Link>
                </Typography>
                {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Courier"}}>
                    {user?
                        <Button variant="outlined" style={{fontFamily: "Courier", fontSize: 20}} onClick={handleLogoutClick} color="inherit">Logout</Button>
                    :
                        <Link to="/login">Login</Link>
                    } 
                </Typography> */}
                </Toolbar>
            </AppBar>
            </Box>
    )
}

export default Nav

