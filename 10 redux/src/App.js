import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './components/Box';

function App() {
  const count = useSelector(state => state.count);
  const id = useSelector(state => state.id);
  const password = useSelector(state => state.password);
  const dispatch = useDispatch();

  const inc = () => {
    dispatch({ type: "INC", payload: { num: 5 } });
  }

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "abc", password: "1234" } });
  }

  const dec = () => {
    dispatch({ type: "DEC", payload: { num: 2 } });
  }

  return (
    <div className="App">
      <div>카운트 : {count}</div>
      <button onClick={inc}>증가</button>
      <button onClick={dec}>감소</button>
      <Box>
      </Box>
      <button onClick={login}>Login</button>
      <h1>{id}</h1>
      <h1>{password}</h1>
    </div>
  );
}

export default App;
