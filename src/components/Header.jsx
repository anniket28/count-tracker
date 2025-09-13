import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function ButtonAppBar(props) {
    const { message, bgColor } = props

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ backgroundColor: bgColor, transition: "0.3s" }} position="static">
                <Toolbar style={{ justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ color: "white", padding: "0.5rem", backgroundColor: "rgb(99 102 241)", borderRadius: "9999px", width: "1.7rem", height: "1.7rem" }} className="bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <h4 style={{ color: "white", marginLeft: "0.5rem" }} className="ml-3 text-lg text-white">XReplyBuddy - A betterselfv2.0 Tool</h4>
                    </div>
                    <div style={{ color: "white" }}>
                        {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
