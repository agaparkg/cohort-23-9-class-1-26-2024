import { useState } from "react";

function App() {
  const [name] = useState("Alex");
  return (
    <div className="App">
      <h1>App - Component</h1>
      <ul>
        <li>
          <A name={name} />
        </li>
        <li>
          <B name={name} />
        </li>
      </ul>
    </div>
  );
}

export default App;

const A = ({ name }) => {
  return (
    <>
      <h1 style={{ color: "green" }}>A - Component - passing thru</h1>
      <ul>
        <li>
          <C name={name} />
        </li>
      </ul>
    </>
  );
};

const B = ({ name }) => {
  return (
    <>
      <h1 style={{ color: "green" }}>B - Component - passing thru</h1>
      <ul>
        <li>
          <E name={name} />
        </li>
        <li>
          <F name={name} />
        </li>
      </ul>
    </>
  );
};

const C = ({ name }) => {
  return (
    <>
      <h1 style={{ color: "blue" }}>C - Component - passing thru</h1>
      <ul>
        <li>
          <D name={name} />
        </li>
      </ul>
    </>
  );
};

const D = ({ name }) => {
  return (
    <>
      <h1 style={{ color: "red" }}>D - Component</h1>
      <h2 style={{ color: "grey" }}>Hello {name}, welcome back</h2>
    </>
  );
};

const E = ({ name }) => {
  return (
    <>
      <h1 style={{ color: "blue" }}>E - Component</h1>
      <h2 style={{ color: "grey" }}>Hello {name}, welcome back</h2>
    </>
  );
};

const F = ({ name }) => {
  return (
    <>
      <h1 style={{ color: "blue" }}>F - Component - passing thru</h1>
      <ul>
        <li>
          <G name={name} />
        </li>
      </ul>
    </>
  );
};

const G = ({ name }) => {
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

const I = ({ name }) => {
  return (
    <>
      <h1 style={{ color: "purple" }}>I - Component</h1>
      <h2 style={{ color: "grey" }}>Hello {name}, welcome back</h2>
    </>
  );
};
