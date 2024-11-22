import { useEffect, useState } from 'react';
import './App.css';
import Loader from './components/Loader'
import Header from './components/Header'
import Home from './components/Home'
import ThemeSelector from './components/ThemeSelector';
import Footer from './components/Footer';

function App() {
  const colors = [
    { name: 'Default', value: '#1976d2' },
    { name: 'Red', value: 'red' },
    { name: 'Green', value: 'green' },
    { name: 'Black', value: 'black' },
  ];

  const [message, setmessage] = useState("")
  const [goal, setGoal] = useState(null)
  const [count, setCount] = useState(0)
  const [bgColor, setBgColor] = useState(localStorage.getItem("pageTheme") ? localStorage.getItem("pageTheme") : '#1976d2');
  const [open, setOpen] = useState(true)

  const handleColorChange = (event) => {
    localStorage.setItem("pageTheme", event.target.value)

    setBgColor(event.target.value);
  };

  useEffect(() => {
    const d = new Date();
    let hour = d.getHours();

    console.log(hour);

    if (hour < 12) {
      setmessage("Morning")
    } else if (hour < 18) {
      setmessage("Afternoon")
    } else {
      setmessage("Evening")
    }


    if (localStorage.getItem('count')) {
      setCount(parseInt(localStorage.getItem('count')))
    }

    if (localStorage.getItem('goal')) {
      setGoal(parseInt(localStorage.getItem('goal')))
    }

    setOpen(false)
  }, [])


  return (
    <div className="App">
      {open && <Loader bgColor={bgColor} />}
      {!open && <>
        <Header message={message} count={count} setCount={setCount} goal={goal} setGoal={setGoal} bgColor={bgColor} />
        <ThemeSelector colors={colors} bgColor={bgColor} handleColorChange={handleColorChange} />
        <Home count={count} setCount={setCount} goal={goal} setGoal={setGoal} bgColor={bgColor} />
        <Footer bgColor={bgColor} />
      </>}
    </div>
  );
}

export default App;