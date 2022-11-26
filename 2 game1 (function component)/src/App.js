import './App.css';
import Box from './components/Box'
import { useState } from 'react';

const init = {
  init: {
    name: 'init',
    img: 'https://cdn.pixabay.com/photo/2017/02/13/01/26/the-question-mark-2061539_1280.png'
  }
};
const ele = {
  
  rock: {
    name: 'rock',
    img: 'https://previews.123rf.com/images/8dda/8dda1605/8dda160500010/56822337-%ED%9D%B0-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%B0%94%EC%9C%84-%EB%8F%8C.jpg'
  },
  cut: {
    name: 'cut',
    img: 'https://www.tefal.co.kr/medias/?context=bWFzdGVyfGltYWdlc3wyMzQ4NnxpbWFnZS9qcGVnfGltYWdlcy9oMTgvaDc3LzE2MDE4NjY0MjI2ODQ2LmpwZ3xlMjRlNDNmNzRlY2I0ZDI3NWFiNzI1Y2RhMDFjZWJmNWQ1NDk3MTU3ZTQ3MmE5ZWNkNmFmZDE0ZTE5NWUxOTRj'
  },
  bo: {
    name: 'bo',
    img: 'https://previews.123rf.com/images/paylessimages/paylessimages1506/paylessimages150606711/49452836-%EB%B3%B4%EC%9E%90%EA%B8%B0-%ED%8F%AC%EC%9E%A5-%EC%A0%9C%ED%92%88.jpg'
  }
}

function App() {
  const [item, setItem] = useState(init.init);
  const [aiItem, setAiItem] = useState(init.init);
  const [result, setResult] = useState("");

  const run = (type) => {
    setItem(ele[type]);
    let ai = randomValue();
    setAiItem(ai);
    let result = calculation(ele[type], ai);
    setResult(result);
  };

  const randomValue = () => {
    let arr = Object.keys(ele);
    let random = Math.floor(Math.random() * 100 % 3);
    let result = arr[random];
    return ele[result];
  };

  const calculation = (you, ai) => {
    switch(you.name) {
      case ai.name :
        return "tie"
      case "rock" :
        return ai.name == "cut" ? "win" : "lose";
      case "cut" :
        return ai.name == "bo" ? "win" : "lose";
      case "bo" :
        return ai.name == "rock" ? "win" : "lose";
    }
  }

  return (
    <div>
      <div className="main">
        <Box target="You" item={item} result={result}/>
        <Box target="AI" item={aiItem} result={result}/>
      </div>
      <div className="main">
        <button onClick={() => run("cut")}>가위</button>
        <button onClick={() => run("rock")}>바위</button>
        <button onClick={() => run("bo")}>보</button>
      </div>
    </div>
    
  );
}

export default App;
