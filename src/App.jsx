import { useState, useEffect } from 'react'
import './App.css'
import { Box, Button, CircularProgress, Container, Stack, TextField, Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';

function App() {
  const [state, setState] = useState();
  const [textFieldState, setTextFieldState] = useState();

  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=155b2ed5bf7acdf91c902ae7ee3428ad&units=metric")
      .then((data) => data.json())
      .then((data) => {
        setState(data);
        console.log(data);
      });
  }, []);

  return (
    <Container maxWidth="xs">
      <Typography variant='h2'>Weather App</Typography>
      {state ? (
        <Box marginTop="30px">
          <Stack
            display="inline-flex"
            alignItems="start"
          >
          <Typography variant='h1'>{state.main.temp}°</Typography>
            <Stack
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
            >
              <PlaceIcon sx={{fontSize: "50px"}} color="primary" />
              <Typography fontSize="20px">{state.name}</Typography>
            </Stack>
          </Stack>
          <Stack
            flexDirection="row"
            justifyContent="center"
            marginTop="40px"
            fontSize="20px"
          >
            {`${state.main.temp_max}° / ${state.main.temp_min}° Feel Like ${state.main.feels_like}°`}
          </Stack>
          <Stack
            flexDirection="row"
            justifyContent="center"
            marginTop="20px"
          >
            <TextField />
            <Button>Enter</Button>
          </Stack>
        </Box>
      ) : (
        <CircularProgress />
      )}
    </Container>
  )
}

export default App
