import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=155b2ed5bf7acdf91c902ae7ee3428ad&units=metric")
      .then((data) => data.json())
      .then((data) => {console.log(data)});
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
    </div>
  )
}

export default App
