import { useState, useEffect } from 'react'
import './App.css'
import { Box, CircularProgress, Container, Typography } from '@mui/material';

function App() {
  const [state, setState] = useState();
  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=155b2ed5bf7acdf91c902ae7ee3428ad&units=metric")
      .then((data) => data.json())
      .then((data) => {
        setState(data);
      });
  }, []);

  return (
    <Container maxWidth="xs">
      <Typography variant='h3'>Weather App</Typography>
      {state ? (
        <Box marginTop="20px">
          <Typography variant='h4'>{state.main.temp}°</Typography>
        </Box>
      ) : (
        <CircularProgress />
      )}
    </Container>
  )
}

export default App
