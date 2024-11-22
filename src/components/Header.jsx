import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function ButtonAppBar(props) {
    const { message, bgColor } = props

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{backgroundColor: bgColor, transition: "0.3s"}} position="static">
                <Toolbar style={{ justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <h4>Good {message}</h4>
                    </div>
                    <div>
                        <h3>COUNT TRACKER</h3>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
