# class component

- rcc 
- constructor
```js
// 생성자
constructor(props) {
    super(props);
    this.state = {
        // key: value
        // 상태 변수
        cnt: 0,
    };
}
```
- 상태 메서드
```js
increase = () => {
    this.setState({ 
        cnt: this.state.cnt + 1,
    })
};
```
