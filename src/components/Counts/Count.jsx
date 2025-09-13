import React, { useState } from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { AddCircle, RemoveCircle, ReplayCircleFilled } from '@mui/icons-material';
import { Alert, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar, TextField, Typography } from '@mui/material';

const Count = (props) => {
    let { count, setCount, countGoal, setCountGoal, bgColor, setShowConfetti, vertical, horizontal, totalCount, setTotalCount } = props

    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")
    const [alertSeverity, setAlertSeverity] = useState(null)

    const handleOpenAlert = () => {
        setOpenAlert(true);
    };

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleIncrease = () => {
        if (count + 1 === countGoal) {
            setShowConfetti(true)
        }

        setCount(count + 1)
        setTotalCount(totalCount + 1)
        localStorage.setItem("count", count + 1)
    }

    const handleDecrease = () => {
        setCount(count - 1)
        setTotalCount(totalCount - 1)

        localStorage.setItem("count", count - 1)
    }

    const handleReset = () => {
        setCount(0)
        setTotalCount(totalCount - count)
        localStorage.removeItem("count")
    }

    const handleResetCountGoal = () => {
        setCountGoal(null)
        localStorage.removeItem("countGoal")
    }
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                    mt: 5,
                    my: 5,
                    mb: 3
                },
            }}
        >

            {(!countGoal || countGoal === 0) && <Button size='small' style={{ marginTop: "25px", backgroundColor: bgColor, transition: "0.3s" }} variant='contained' onClick={handleClickOpen}>
                Set Count Goal
            </Button>}

            {countGoal && countGoal !== 0 && <div style={{ marginTop: "25px", marginBottom: "0px", display: "flex", alignItems: "center" }}>
                <h2 style={{ marginTop: "0px", marginBottom: "0px", marginRight: "20px" }}>Count Goal: {countGoal}</h2>
                <Button sx={{ backgroundColor: bgColor, transition: "0.3s" }} size='small' variant='contained' onClick={handleResetCountGoal}>
                    Reset Count Goal
                </Button>
                <h2 style={{ marginTop: "0px", marginBottom: "0px", marginLeft: "20px" }}>Remaining: {countGoal - count}</h2>
            </div>
            }

            <Dialog
                fullWidth={true}
                maxWidth={"sm"}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const goalCount = formJson.goalCount;

                        if (parseInt(goalCount) < 0) {
                            setAlertMessage("Count Goal must be positive")
                            setAlertSeverity("error")
                            handleOpenAlert()
                        } else if (parseInt(goalCount) === 0) {
                            setAlertMessage("Count Goal should not be zero")
                            setAlertSeverity("error")
                            handleOpenAlert()
                        } else {
                            setCountGoal(parseInt(goalCount))
                            localStorage.setItem('countGoal', parseInt(goalCount))
                            setAlertSeverity("success")
                            setAlertMessage("Count Goal set successfully")
                            handleOpenAlert()
                            handleClose();
                        }
                    },
                }}
            >
                <DialogTitle>Set today's count goal</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="goalCount"
                        name="goalCount"
                        label="Count Goal"
                        type="number"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button sx={{ backgroundColor: "white", color: bgColor, transition: "0.3s" }} onClick={handleClose}>Cancel</Button>
                    <Button sx={{ backgroundColor: "white", color: bgColor, transition: "0.3s" }} type="submit">Ok</Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={openAlert}
                autoHideDuration={5000}
                onClose={handleCloseAlert}>
                <Alert
                    onClose={handleCloseAlert}
                    severity={alertSeverity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {alertMessage}
                </Alert>
            </Snackbar>

            <ButtonGroup style={{ marginTop: "25px" }} variant="outlined" aria-label="Basic button group">
                <Button style={{ border: "0px" }} onClick={handleIncrease}><AddCircle style={{ fontSize: "33px", color: bgColor, transition: "0.3s" }} /></Button>
                <Button style={{ border: "0px" }} onClick={handleDecrease} disabled={count === 0}><RemoveCircle style={{ fontSize: "33px", color: bgColor, transition: "0.3s" }} /></Button>
                <Button style={{ border: "0px" }} onClick={handleReset} disabled={count === 0}><ReplayCircleFilled style={{ fontSize: "33px", color: bgColor, transition: "0.3s" }} /></Button>
            </ButtonGroup>
            <Typography variant="h4">{count}</Typography>
        </Box>
    )
}

export default Count