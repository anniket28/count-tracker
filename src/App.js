import { useEffect, useState } from 'react';
import './App.css';
import Loader from './components/Loader'
import Header from './components/Header'
import Home from './components/Home'
import ThemeSelector from './components/ThemeSelector';
import Footer from './components/Footer';

function App() {
  const colors = [
    { name: 'Default', value: 'green' },
    { name: 'Red', value: 'red' },
    { name: 'Blue', value: '#1976d2' },
    { name: 'Black', value: 'black' },
  ];

  const [open, setOpen] = useState(true)
  const [message, setmessage] = useState("")
  const [quote, setQuote] = useState("Stay strong. Better days are coming.")
  const [bgColor, setBgColor] = useState(localStorage.getItem("pageTheme") ? localStorage.getItem("pageTheme") : 'green');
  const [count, setCount] = useState(0)
  const [countGoal, setCountGoal] = useState(null)
  const [bigCount, setBigCount] = useState(0)
  const [bigCountGoal, setBigCountGoal] = useState(null)
  const [totalCount, setTotalCount] = useState((localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0) + localStorage.getItem('bigCount') ? parseInt(localStorage.getItem('bigCount')) : 0)

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

    if (localStorage.getItem('countGoal')) {
      setCountGoal(parseInt(localStorage.getItem('countGoal')))
    }

    if (localStorage.getItem('bigCount')) {
      setBigCount(parseInt(localStorage.getItem('bigCount')))
    }

    if (localStorage.getItem('bigCountGoal')) {
      setBigCountGoal(parseInt(localStorage.getItem('bigCountGoal')))
    }

    setOpen(false)
  }, [])


  return (
    <div className="App">
      {open && <Loader bgColor={bgColor} />}
      {!open && <>
        <Header count={count} setCount={setCount} countGoal={countGoal} setCountGoal={setCountGoal} bgColor={bgColor} />
        <ThemeSelector colors={colors} bgColor={bgColor} handleColorChange={handleColorChange} />
        <Home count={count} setCount={setCount} countGoal={countGoal} setCountGoal={setCountGoal} bigCount={bigCount} setBigCount={setBigCount} bigCountGoal={bigCountGoal} setBigCountGoal={setBigCountGoal} totalCount={totalCount} setTotalCount={setTotalCount} bgColor={bgColor} />
        <Footer bgColor={bgColor} />
      </>}
    </div>
  );
}

export default App;