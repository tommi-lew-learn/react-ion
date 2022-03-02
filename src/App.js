import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Timezones from "./Timezones";

const App = () => {
  return (
    <div
      className="m-2 p-2"
    >
      <h1
        className="p-2 text-center text-lg"
      >
        React-ion
      </h1>
      <Timezones />
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
