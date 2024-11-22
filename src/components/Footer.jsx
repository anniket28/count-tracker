import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'
import XIcon from '@mui/icons-material/X';

const Footer = (props) => {
    const { bgColor } = props

    return (
        <div>
            <Box sx={{ flexGrow: 1 }} style={{ position: "absolute", bottom: "0px", width: "100%" }}>
                <AppBar sx={{ backgroundColor: bgColor, transition: "0.3s" }} position='static'>
                    <Toolbar style={{ justifyContent: "space-evenly", alignItems: "center" }}>
                        <div>
                            <h3>Developed and Maintained By&nbsp;:&nbsp;Mindset Mettle</h3>
                        </div>
                        <div>
                            <h3>Contact&nbsp;:&nbsp;
                                <a style={{ color: "white", textDecoration: "none" }} href="mailto:mm.mindsetmettle@gmail.com">
                                    mm.mindsetmettle@gmail.com
                                </a>
                            </h3>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <h3>Social&nbsp;:&nbsp;</h3>
                                <a href="https://x.com/Mindset_Mettle" target="_blank" rel="noopener noreferrer">
                                    <XIcon style={{ color: "white" }} />
                                </a>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Footer