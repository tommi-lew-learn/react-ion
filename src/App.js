import { StrictMode } from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <h1>React-ion</h1>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
