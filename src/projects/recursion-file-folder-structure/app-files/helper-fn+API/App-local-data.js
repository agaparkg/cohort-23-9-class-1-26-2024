import { FaFolder, FaFile } from "react-icons/fa";
import data from "./data.js";

function App() {
  return (
    <div className="App">
      <HelperFunction data={data} />
    </div>
  );
}

export default App;

function HelperFunction({ data }) {
  return (
    <ul>
      {data &&
        data.map((item, index) => {
          if (item.type === "file") {
            return (
              <li key={index}>
                <FaFile className="me-2" />
                {item.name}
              </li>
            );
          }

          return (
            <li key={index}>
              <FaFolder style={{ color: "red" }} className="me-2" />
              {item.name}
              <HelperFunction data={item.children} />
            </li>
          );
        })}
      {/* <li>
        <FaFolder style={{ color: "red" }} className="me-2" />
        public
        <ul>
          <li>
            <FaFile className="me-2" />
            child 1
          </li>
        </ul>
      </li>
      <li>
        <FaFolder style={{ color: "red" }} className="me-2" />
        src
        <ul>
          <li>
            <FaFile className="me-2" />
            child 1
          </li>
          <li>child 2</li>
        </ul>
      </li> */}
    </ul>
  );
}
