# Redux

- state 값을 효율적으로 전달 및 사용하기 위해 사용하는 라이브러리
- 즉, state 값을 저장하는 **저장소** 역할을 하여 state 값을 언제든지 저장 및 가져와서 사용 가능하게 된다.
- 컴포넌트가 store 의 값을 바로 바꾸거나(direct) 요청하지 못함
- 그래서 다음과 같은 것을 통해 간접적으로 바꾸거나 요청함
  - Action
  - Reducer
  - useDispatch (리액트 훅)
  - useSelector (리액트 훅)

## 기본 state 단점

- 부모 --> 자식 으로 state 값을 props 를 통해 전달해야 함
- 부모(app.js) 에서 모든 state 값을 선언하고 저장한다.

## redux 공식 홈페이지

https://ko.redux.js.org/introduction/getting-started/

```sh
npm install redux
```

## react redux

https://react-redux.js.org/introduction/getting-started

```sh
npm install react-redux
```

## index.js 정의

```jsx
import { Provider } from "react-redux"
import store from "./redux/store"

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
```

## Base usage

```jsx
import { useDispatch, useSelector } from "react-redux"

function App() {
  /*
    useSelector( function )
  */
  const count = useSelector((state) => state.count)
  // useDispatch 사용 정의
  const dispatch = useDispatch()

  const inc = () => {
    /**
     * dispatch( Object )
     *      Object { type: String, payload: Object }
     */
    dispatch({ type: "INC", payload: { num: 5 } })
  }

  return (
    <div className="App">
      <div>카운트 : {count}</div>
      <button onClick={inc}>증가</button>
    </div>
  )
}
```