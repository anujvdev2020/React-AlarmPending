import React, { useEffect, useState } from "react";
import "./styles.css";

const App = () => {
  const [input, setInput] = useState();
  const [alarms, setAlarms] = useState([]);

  const d = new Date();
  const h = d.getHours();
  const m = d.getMinutes();

  const [ctime, setCurrent] = useState(`${h}:${m}`);

  const handleClick = () => {
    let t = input;
    setAlarms([...alarms, t]);
    console.log(alarms);
  };

  useEffect(() => {
    setInterval(() => setCurrent(`${h}:${m}`), 60000);
    alarms.map((a) => {
      if (a === ctime) {
        console.log("Same");
      }
      return true;
    });
  });

  return (
    <div className="App">
      <h1>Alarm App</h1>
      <p>Its {ctime}</p>

      <input type="time" onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleClick}>+</button>

      <div>
        {alarms.map((a, i) => (
          <p key={i}>
            {i + 1}){a}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
