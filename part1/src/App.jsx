// import Header from "./components/Header";
// import Content from "./components/Content";
// import Total from "./components/Total";
import { useState } from "react";

// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age;
//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>so you are probably born in {bornYear()}</p>
//     </div>
//   );
// };

// const Display = ({ counter }) => <div>{counter}</div>;

// const Button = (props) => {
//   return <button onClick={props.onClick}>{props.text}</button>;
// };

const App = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1,
    };
    setClicks(newClicks);
  };
  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1,
    };
    setClicks(newClicks);
  };
  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  );
};

export default App;
