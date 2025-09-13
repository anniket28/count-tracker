import * as React from 'react';
import { useState } from 'react';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from "react-use";
import Count from './Counts/Count';
import BigCount from './Counts/BigCount';

export default function Home(props) {
  let { count, setCount, countGoal, setCountGoal, bigCount, setBigCount, bigCountGoal, setBigCountGoal, totalCount, setTotalCount, bgColor } = props

  const [showConfetti, setShowConfetti] = useState(false)

  const duration = 10000
  const vertical = "bottom"
  const horizontal = "center"
  const { width, height } = useWindowSize();

  React.useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), duration);
      return () => clearTimeout(timer);
    }
  }, [showConfetti, duration]);

  return (<>
  <h2 style={{textAlign: "center"}}>Total count: {totalCount}</h2>
    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
      <Count count={count} setCount={setCount} countGoal={countGoal} setCountGoal={setCountGoal} bgColor={bgColor} setShowConfetti={setShowConfetti} vertical={vertical} horizontal={horizontal} totalCount={totalCount} setTotalCount={setTotalCount} />
      <BigCount bigCount={bigCount} setBigCount={setBigCount} bigCountGoal={bigCountGoal} setBigCountGoal={setBigCountGoal} bgColor={bgColor} setShowConfetti={setShowConfetti} vertical={vertical} horizontal={horizontal} totalCount={totalCount} setTotalCount={setTotalCount} />
    </div>
    {showConfetti && <ReactConfetti width={width} height={height} />}
  </>
  );
}