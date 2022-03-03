import { useState, useEffect } from "react";
import momentTZ from "moment-timezone";
import CurrentTimes from "./CurrentTimes";

const Timezones = () => {
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
    <div
      className="m-2 p-2 grid grid-cols-8"
    >
      <select
        className="m-2 p-2 col-start-4 col-span-2 rounded-sm cursor-pointer"
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

      <CurrentTimes currentTimes={currentTimes} />
    </div>
  );
};

export default Timezones;
