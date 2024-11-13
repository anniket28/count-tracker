import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { AddCircle, RemoveCircle, ReplayCircleFilled } from '@mui/icons-material';
import { Alert, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from "react-use";

export default function Home(props) {
  let { count, setCount, goal, setGoal } = props

  const duration = 10000
  const vertical = "bottom"
  const horizontal = "center"
  const { width, height } = useWindowSize();

  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const [alertSeverity, setAlertSeverity] = useState(null)
  const [showConfetti, setShowConfetti] = useState(false)

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
    if (count + 1 === goal) {
      setShowConfetti(true)
    }

    setCount(count + 1)
    localStorage.setItem("count", count + 1)
  }

  const handleDecrease = () => {
    setCount(count - 1)
    localStorage.setItem("count", count - 1)
  }

  const handleReset = () => {
    setCount(0)
    localStorage.removeItem("count")
  }

  const handleResetGoal = () => {
    setGoal(null)
    localStorage.removeItem("goal")
  }

  React.useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), duration);
      return () => clearTimeout(timer);
    }
  }, [showConfetti, duration]);

  return (<>
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

      {(!goal || goal === 0) && <Button size='small' style={{ marginTop: "25px" }} variant='contained' onClick={handleClickOpen}>
        Set Goal
      </Button>}

      {goal && goal !== 0 && <div style={{ marginTop: "25px", marginBottom: "0px", display: "flex", alignItems: "center" }}>
        <h2 style={{ marginTop: "0px", marginBottom: "0px", marginRight: "20px" }}>Goal: {goal}</h2>
        <Button size='small' variant='contained' onClick={handleResetGoal}>
          Reset Goal
        </Button>
        <h2 style={{ marginTop: "0px", marginBottom: "0px", marginLeft: "20px" }}>Remaining: {goal - count}</h2>
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
              setAlertMessage("Goal must be positive")
              setAlertSeverity("error")
              handleOpenAlert()
            } else if (parseInt(goalCount) === 0) {
              setAlertMessage("Goal should not be zero")
              setAlertSeverity("error")
              handleOpenAlert()
            } else {
              setGoal(parseInt(goalCount))
              localStorage.setItem('goal', parseInt(goalCount))
              setAlertSeverity("success")
              setAlertMessage("Goal set successfully")
              handleOpenAlert()
              handleClose();
            }
          },
        }}
      >
        <DialogTitle>Set today's goal</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="goalCount"
            name="goalCount"
            label="Goal"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Ok</Button>
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
        <Button style={{ border: "0px" }} onClick={handleIncrease}><AddCircle style={{ fontSize: "33px" }} /></Button>
        <Button style={{ border: "0px" }} onClick={handleDecrease} disabled={count === 0}><RemoveCircle style={{ fontSize: "33px" }} /></Button>
        <Button style={{ border: "0px" }} onClick={handleReset} disabled={count === 0}><ReplayCircleFilled style={{ fontSize: "33px" }} /></Button>
      </ButtonGroup>
      <Typography variant="h4">{count}</Typography>
    </Box>
    {showConfetti && <ReactConfetti width={width} height={height} />}
  </>
  );
}