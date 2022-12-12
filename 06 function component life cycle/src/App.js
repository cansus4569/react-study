import './App.css';
import Book from './component/Book';
import {useState, useEffect} from "react";

function App() {
  let counter = 0;
  const [cnt, setCnt] = useState(0);
  const [test, setTest] = useState(0);
  const [val, setVal] = useState(0);
  const inc = () => {
    counter++;
    setCnt(cnt + 1);
    setTest(test + 2);
    // console.log(counter, cnt);
  }
  const diff = () => {
    setVal(val + 1);
  }
  

  // componentDidMount
  useEffect(() => {
    console.log("useEffect init")
  }, []); // 빈 array

  // componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log("useEffect update 1", cnt, test)
  }, [cnt, test]); // array 안에 상태변수(state)

  useEffect(() => {
    console.log("useEffect update 2", val)
  }, [val]); // array 안에 상태변수(state)

  return (
    <div>
      {console.log("render")}
      <div>{counter}</div>
      <div>{cnt}</div>
      <button onClick={inc}>증가!</button>
      <button onClick={diff}>슉!</button>
    </div>
  );
}

export default App;