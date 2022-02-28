import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Timezones from "./Timezones";

const App = () => {
  return (
    <div>
      <h1>React-ion</h1>
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
