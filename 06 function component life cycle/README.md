# 함수형 컴포넌트 life cycle

- useEffect
  - react hook (리액트 유용한 Function)

```js
import { useEffect } from "react"

/**
 * useEffect(callback, array)
 * @callback 콜백함수
 * @array 배열
 */
useEffect(() => {}, [])
useEffect(() => {
  // TODO: action, api call, etc...
}, [state])
```
