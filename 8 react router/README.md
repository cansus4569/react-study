# React Router
https://reactrouter.com/en/main

## Installation
```bash
# default
$ npm install react-router-dom

# version 6
$ npm install react-router-dom@6
```

## Import & Usage
- src/index.js
```jsx
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```
- src/App.js
```jsx
import { Routes, Route } from "react-router-dom";
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </div>
  );
}
```

## RESTful Routes
- url 디자인 패턴

![CleanShot 2022-11-26 at 20 35 35](https://user-images.githubusercontent.com/63139527/204086687-502d8fcc-0bac-44bd-a5eb-cde3eba2b4fa.png)

### HTTP Method
- Get : 데이터를 가져올 때 씀 (fetch 기본 동작 Get)
- Post : 데이터 생성할 때 씀
- Patch : 데이터를 수정할 때 씀 (= Put)
- Delete : 데이터를 삭제할 때 씀

### 필요성
- url에서 동사는 HTTP Verb (=HTTP Method)로 대체 함
- 즉, /items 라는 url 하나로 4가지 액션을 수행할 수 있음
```
/item + get = 아이템 읽어오기
/item + post = 아이템 생성하기
/item + put = 아이템 수정하기
/item + delete = 아이템 삭제하기
```

- 하나의 아이템만 가져오고싶다면 뒤에 아이템의 id를 붙이는 것도 RESTful Route 규칙임
```
/items/:id + get 명령어 = id를 가진 아이템 읽어오기
/items/:id + put 명령어 = id를 가진 아이템 수정하기
/items/:id + delete 명령어 = id를 가진 아이템 삭제하기
```

## from "react-router-dom"

- 종류
```jsx
import { 
    Routes, 
    Route, 
    Navigate, 
    Link, 
    useNavigate, 
    useParams, 
    useSearchParams 
} from "react-router-dom"
```

### Routes
- `<Route />` 들을 감싸는 그룹 느낌...?
```jsx
<Routes>
    <Route path="/path" element={component} /> { /* useage */ }
    <Route path="/" element={<Homepage />} /> { /* example */ }
</Routes>
```

### Route
- 페이지 지정 [ "경로", {컴포넌트} ]
```jsx
// usage
<Route path="/path" element={component} />

// example
<Route path="/" element={<Homepage />} />
```

### Navigate
- component 형태
- 사용목적 : 경로 리다이렉트
```jsx
// usage
<Navigate to="/path" />

// example
<Navigate to="/login" />

// example

const PrivateRoute = () => {
    return auth == true ? <UserPage /> : <Navigate to="/login" />
}
```

### Link
- 페이지 이동 (component 형태)
```jsx
// usage
<Link to="path">Click me</Link>

// example
<Link to="/home">Click me</Link>
```

### useNavigate
- 페이지 이동 (JS 함수 형태)
```jsx
const navigate = useNavigate();
const func = () => {
    navigate('/home?id=123');
}
<button onClick={func}>Click me</button>
```

### useParams
- URL 파라미터 읽어오기
```jsx
const param = useParams();
const { id } = useParams();
```

### useSearchParams
- URL 쿼리값 가져오기
```jsx
let [query, setQuery] = useSearchParams();
console.log(query.get('id'));
```