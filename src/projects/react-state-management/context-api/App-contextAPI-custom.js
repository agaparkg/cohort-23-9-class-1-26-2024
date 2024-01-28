import { StateProvider, useStateContextApi } from "./context";

function App() {
  return (
    <StateProvider>
      <div className="App">
        <h1>App - Component</h1>
        <ul>
          <li>
            <A />
          </li>
          <li>
            <B />
          </li>
        </ul>
      </div>
    </StateProvider>
  );
}

export default App;

const A = () => {
  return (
    <>
      <h1 style={{ color: "green" }}>A - Component - passing thru</h1>
      <ul>
        <li>
          <C />
        </li>
      </ul>
    </>
  );
};

const B = () => {
  return (
    <>
      <h1 style={{ color: "green" }}>B - Component - passing thru</h1>
      <ul>
        <li>
          <E />
        </li>
        <li>
          <F />
        </li>
      </ul>
    </>
  );
};

const C = () => {
  return (
    <>
      <h1 style={{ color: "blue" }}>C - Component - passing thru</h1>
      <ul>
        <li>
          <D />
        </li>
      </ul>
    </>
  );
};

const D = () => {
  const { name } = useStateContextApi();

  return (
    <>
      <h1 style={{ color: "red" }}>D - Component</h1>
      <h2 style={{ color: "grey" }}>Hello {name}, welcome back.</h2>
    </>
  );
};

const E = () => {
  const { name } = useStateContextApi();

  return (
    <>
      <h1 style={{ color: "blue" }}>E - Component</h1>
      <h2 style={{ color: "grey" }}>Hello {name}, welcome back.</h2>
    </>
  );
};

const F = () => {
  return (
    <>
      <h1 style={{ color: "blue" }}>F - Component - passing thru</h1>
      <ul>
        <li>
          <G />
        </li>
      </ul>
    </>
  );
};

const G = () => {
  return (
    <>
      <h1 style={{ color: "red" }}>G - Component - passing thru</h1>
      <ul>
        <li>
          <H />
        </li>
        <li>
          <I />
        </li>
      </ul>
    </>
  );
};

const H = () => {
  return <h1 style={{ color: "purple" }}>H - Component</h1>;
};

const I = () => {
  const { name, setName } = useStateContextApi();

  const handleClick = () => {
    const namesArr = [
      "John",
      "Sam",
      "Joshua",
      "Peter",
      "David",
      "Robert",
      "Henry",
    ];
    const random = Math.floor(Math.random() * namesArr.length);

    setName(namesArr[random]);
  };

  return (
    <>
      <h1 style={{ color: "purple" }}>I - Component</h1>
      <h2 style={{ color: "grey" }}>Hello {name}, welcome back.</h2>
      <button
        style={{ padding: "10px 20px", fontSize: "18px", cursor: "pointer" }}
        onClick={handleClick}
      >
        Change user's name
      </button>
    </>
  );
};
