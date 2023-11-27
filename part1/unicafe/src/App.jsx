import { useState } from "react";

const Statistics = (props) => {
  const getTotal = () => props.good + props.neutral + props.bad;

  const getAverage = () => {
    return getTotal() === 0 ? 0 : (props.good - props.bad) / getTotal();
  };

  const getPositive = () => {
    return getTotal() === 0 ? 0 : (props.good / getTotal()) * 100;
  };

  return (
    <>
      <h1>statistics</h1>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {getTotal()}</p>
      <p>Average: {getAverage()}</p>
      <p>Positive: {getPositive()}%</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    const updateGood = good + 1;
    setGood(updateGood);
    console.log("good:", updateGood);
  };

  const handleNeutral = () => {
    const updateNeutral = neutral + 1;
    setNeutral(updateNeutral);
    console.log("neutral:", updateNeutral);
  };

  const handleBad = () => {
    const updateBad = bad + 1;
    setBad(updateBad);
    console.log("bad:", updateBad);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <br></br>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
