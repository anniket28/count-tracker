import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { AddCircle, RemoveCircle, ReplayCircleFilled } from '@mui/icons-material';
import { Typography } from '@mui/material';

export default function Home() {
  const [count, setCount] = React.useState(0)

  const handleIncrease = () => {
    setCount(count + 1)
    localStorage.setItem("count", count + 1)
  }

  const handleDecrease = () => {
    setCount(count - 1)
    localStorage.setItem("count", count - 1)
  }

  const handleReset = () => {
    setCount(0)
    localStorage.clear()
  }

  React.useEffect(() => {
    if (localStorage.getItem('count')) {
      setCount(parseInt(localStorage.getItem('count')))
    }
  }, [])

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
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button style={{ border: "0px" }} onClick={handleIncrease}><AddCircle style={{ fontSize: "33px" }} /></Button>
        <Button style={{ border: "0px" }} onClick={handleDecrease} disabled={count === 0}><RemoveCircle style={{ fontSize: "33px" }} /></Button>
        <Button style={{ border: "0px" }} onClick={handleReset} disabled={count === 0}><ReplayCircleFilled style={{ fontSize: "33px" }} /></Button>
      </ButtonGroup>
      <Typography variant="h4">{count}</Typography>
    </Box>
  );
}