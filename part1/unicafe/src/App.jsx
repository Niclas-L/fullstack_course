import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const StatisticLine = (props) => {
  return (
    <>
      <tr>
        <td>{props.text}:</td>
        <td>{props.value}</td>
      </tr>
    </>
  );
};

const Statistics = (props) => {
  const getTotal = () => props.good + props.neutral + props.bad;

  const getAverage = () =>
    getTotal() === 0 ? 0 : (props.good - props.bad) / getTotal();

  const getPositive = () => (props.good / getTotal()) * 100 + "%";

  return getTotal() === 0 ? (
    <p>No feedback given</p>
  ) : (
    <>
      <table>
        <tbody>
          <StatisticLine text="Good" value={props.good} />
          <StatisticLine text="Neutral" value={props.neutral} />
          <StatisticLine text="Bad" value={props.bad} />
          <StatisticLine text="All" value={getTotal()} />
          <StatisticLine text="Average" value={getAverage()} />
          <StatisticLine text="Positive" value={getPositive()} />
        </tbody>
      </table>
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
      <Button handleClick={handleGood} text="Good" />
      <Button handleClick={handleNeutral} text="Neutral" />
      <Button handleClick={handleBad} text="Bad" />
      <br></br>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
