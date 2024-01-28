import { Button } from "reactstrap";
import useFetchData from "./hooks/useFetchData";
import "./styles.css";

export default function App() {
  const [data, handleBtnClick, urlEnd] = useFetchData();

  // data[0]
  return (
    <div className="App">
      <Button id="users" onClick={handleBtnClick} color="primary">
        Users
      </Button>
      <Button
        id="comments"
        onClick={handleBtnClick}
        className="mx-2"
        color="secondary"
      >
        Comments
      </Button>
      <Button id="posts" onClick={handleBtnClick} color="success">
        Posts
      </Button>
      <menu className="border rounded p-3">
        {data && (
          <>
            <h3>
              Total {urlEnd}: {data.length}
            </h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </>
        )}
      </menu>
    </div>
  );
}
