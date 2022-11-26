import './App.css';
import Book from './component/Book';
import {useState} from "../../2 game1 (function component)/node_modules/@types/react";

function App() {
  let counter = 0;
  const [cnt, setCnt] = useState(0);
  const inc = () => {
    counter++;
    setCnt(cnt + 1);
    console.log(counter, cnt);
  }
  return (
    <div>
      <Book name="해리포터 비밀의 방" num={1} />
      <Book name="해리포터 아즈카반의 죄수" num={2} />
      <Book name="해리포터 불의 잔" num={3} />
      <div>{counter}</div>
      <div>{cnt}</div>
      <button onClick={inc}>증가!</button>
    </div>
  );
}

export default App;