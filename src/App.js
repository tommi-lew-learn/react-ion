import { StrictMode, useEffect } from "react";
import ReactDOM from "react-dom";
import Timezones from "./Timezones";
import DarkModeToggle from "./DarkModeToggle";

const App = () => {
  useEffect(() => {
    document.body.classList.add("bg-gray-50");
    document.getElementsByTagName("body")[0].classList.add("dark:bg-gray-900");
  }, []);

  return (
    <div className="relative m-2 p-2">
      <DarkModeToggle />
      <h1 className="p-2 text-center text-lg dark:text-white">Reaction</h1>
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
