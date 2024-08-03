import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'

function App() {
  const [goal, setGoal] = useState(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (localStorage.getItem('count')) {
      setCount(parseInt(localStorage.getItem('count')))
    }

    if (localStorage.getItem('goal')) {
      setGoal(parseInt(localStorage.getItem('goal')))
    }
  }, [])


  return (
    <div className="App">
      <Header count={count} setCount={setCount} goal={goal} setGoal={setGoal} />
      <Home count={count} setCount={setCount} goal={goal} setGoal={setGoal} />
    </div>
  );
}

export default App;