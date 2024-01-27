// import { StateContext } from "./context-api/context";
// import { useContext } from "react";

import { useStateContextApi } from "./context-api/context";

function App() {
  return (
    <div className="App">
      Hello
      {/* <Counter count={count} setCount={setCount} /> */}
      <Counter />
    </div>
  );
}

export default App;

// function Counter({count, setCount}) {
function Counter() {
  // const { count, setCount } = useContext(StateContext);
  const { count, setCount, user } = useStateContextApi(); // returns useContext(StateContext)

  return (
    <>
      <h1>Name: {user}</h1>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

// const B = ({ children }) => {
//   // console.log(children);
//   return <>{children}</>;
// };

// function C() {
//   return (
//     <>
//       <h1>C - passing thru</h1>
//       <Counter />

//       {/* <D /> */}
//       {/* <E /> */}
//     </>
//   );
// }

// // function D() {
// //   return (
// //     <>
// //       <h1>D - passing thru</h1>
// //       <E />
// //     </>
// //   );
// // }

// // function E() {
// //   const { user, setUser } = useContext(UserContext);

// //   return (
// //     <>
// //       <h1>E - {user}</h1>
// //       <button onClick={() => setUser("John Doe")}>Change user name</button>
// //       <button onClick={() => setUser("Jesse Hall")}>
// //         Change back to Jesse
// //       </button>
// //     </>
// //   );
// // }

// // function F() {
// //   const { user } = useContext(UserContext);
// //   console.log(user); // "Jesse"
// //   return <h1>F - {user}</h1>;
// //   // <>{/* <h1>F - {user}</h1> */}</>;
// // }
