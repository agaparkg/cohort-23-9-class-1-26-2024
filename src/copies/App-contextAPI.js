import { createContext, useContext, useState } from "react";

const StateContext = createContext();

function App() {
  const [user, setUser] = useState("John");
  const [count, setCount] = useState(0);

  const value = {
    user,
    count,
    setCount,
    setUser,
  };
  return (
    <StateContext.Provider value={value}>
      <div className="App">
        {/* <Counter count={count} setCount={setCount} /> */}
        {/* <Counter /> */}
        <B />
      </div>
    </StateContext.Provider>
  );
}

export default App;

// function Counter({count, setCount}) {
function Counter() {
  const { count, setCount } = useContext(StateContext);

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

const B = () => {
  return (
    <>
      <h1>B - passing thru</h1>
      <Counter />
      {/* <C /> */}
    </>
  );
};

// function C() {
//   return (
//     <>
//       <h1>C - passing thru</h1>
//       <D />
//       <E />
//     </>
//   );
// }

// function D() {
//   return (
//     <>
//       <h1>D - passing thru</h1>
//       <E />
//     </>
//   );
// }

// function E() {
//   const { user, setUser } = useContext(UserContext);

//   return (
//     <>
//       <h1>E - {user}</h1>
//       <button onClick={() => setUser("John Doe")}>Change user name</button>
//       <button onClick={() => setUser("Jesse Hall")}>
//         Change back to Jesse
//       </button>
//     </>
//   );
// }

// function F() {
//   const { user } = useContext(UserContext);
//   console.log(user); // "Jesse"
//   return <h1>F - {user}</h1>;
//   // <>{/* <h1>F - {user}</h1> */}</>;
// }
