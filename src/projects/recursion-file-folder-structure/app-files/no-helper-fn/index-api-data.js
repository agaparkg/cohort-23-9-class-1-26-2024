import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "../../../../App";
import useFetchData from "./custom-hook/useFetchData";

const Wrapper = () => {
  const [data] = useFetchData();
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App data={data} />
    </React.StrictMode>
  );
};

const start = new Wrapper();
start();
