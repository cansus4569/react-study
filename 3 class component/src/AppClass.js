// rcc
import React, { Component } from '../../2 game1 (function component)/node_modules/@types/react';
import BookClass from './component/BookClass';

export default class AppClass extends Component {

    // 생성자
    constructor(props) {
        super(props);
        this.state = {
            cnt: 0,
            no: 1,
        };
    }

    increase = () => {
        this.setState({ 
            cnt: this.state.cnt + 1,
            no: this.state.no + 1,
        })
    };

    render() {
        return (
            <div>
                <div>state:{this.state.cnt}</div>
                <button onClick={this.increase}>Click me</button>
                <BookClass num={this.state.no}/>
            </div>
        )
    }
}
