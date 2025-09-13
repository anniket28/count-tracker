import React from 'react'
import { Box, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const ThemeSelector = (props) => {
    const { colors, bgColor, handleColorChange } = props

    return (
        <div>
            <div>
                <Box
                    sx={{
                        backgroundColor: "white",
                        transition: 'background-color 0.3s',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        p: 1,
                    }}
                >
                    <h4 style={{ marginBottom: "0px" }}>Select Page Theme</h4>

                    <FormControl component="fieldset">
                        <RadioGroup
                            row
                            aria-label="page-color"
                            name="page-color"
                            value={bgColor}
                            onChange={handleColorChange}
                        >
                            {colors.map((color) => (
                                <FormControlLabel
                                    key={color.value}
                                    value={color.value}
                                    control={<Radio sx={{ color: color.value, '&.Mui-checked': { color: color.value } }} />}
                                // label={color.name}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </Box>
            </div>
        </div>
    )
}

export default ThemeSelector