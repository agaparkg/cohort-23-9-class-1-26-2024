import { FaFolder, FaFile } from "react-icons/fa";

function App({ data }) {
  return (
    <div className="App">
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
                <App data={item.children} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
