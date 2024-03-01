import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
import { useState } from "react";

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>so you are probably born in {bornYear()}</p>
    </div>
  );
};

const Display = ({ counter }) => <div>{counter}</div>;

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <div>
        <Display counter={counter} />
        <Button onClick={increaseByOne} text="plus" />
        <Button onClick={setToZero} text="zero" />
        <Button onClick={decreaseByOne} text="minus" />
      </div>
      <Header />
      <Content />
      <Total />
    </div>
  );
};

export default App;
