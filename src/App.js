import { useState, useEffect, StrictMode } from "react";
import ReactDOM from "react-dom";
import momentTZ from "moment-timezone";

const App = () => {
  const [timezones, setTimezones] = useState([]);
  const [currentTimes, setCurrentTimes] = useState({});

  useEffect(() => {
    requestCurrentTime();
  }, [timezones]);

  async function requestCurrentTime() {
    const res = await fetch(
      `http://localhost:8000/api/time?tz=${timezones.join(",")}`
    );

    const json = await res.json();

    setCurrentTimes(json);
  }

  return (
    <div>
      <h1>React-ion</h1>

      <select
        id="timezones"
        multiple
        onChange={(e) =>
          setTimezones(
            [...e.target.options].filter((o) => o.selected).map((o) => o.value)
          )
        }
        onBlur={(e) =>
          setTimezones(
            [...e.target.options].filter((o) => o.selected).map((o) => o.value)
          )
        }
      >
        {momentTZ.tz.names().map((tz) => (
          <option value={tz} key={tz}>
            {tz}
          </option>
        ))}
      </select>

      <div className="timezones">
        <table>
          <thead>
            <tr>
              <th>Timezone</th>
              <th>Current time</th>
            </tr>
          </thead>

          <tbody>
            {Object.keys(currentTimes).map((tz) => (
              <tr key={tz}>
                <td>{tz}</td>
                <td>{currentTimes[tz]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
