# 날씨 확인 Project

## 좌표 확인 
https://www.w3schools.com/html/html5_geolocation.asp

```html
<script>
var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude; 
}
</script>
```

## React Bootstrap
https://react-bootstrap.github.io

### Installation
```bash
$ npm install react-bootstrap bootstrap
```

### Importing Components
```js
import Button from 'react-bootstrap/Button';

// or less ideally
import { Button } from 'react-bootstrap';
```

### Stylesheets : CSS
```js
{/* The following line can be included in your src/index.js or App.js file */}

import 'bootstrap/dist/css/bootstrap.min.css';
```

## React-Spinners
https://www.npmjs.com/package/react-spinners

### Installation
```bash
$ npm install --save react-spinners
```

### Usage
```jsx
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default App;
```
