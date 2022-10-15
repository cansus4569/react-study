// rcc
import React, { Component } from 'react';
import BookClass from './component/BookClass';

export default class AppClass extends Component {

    // 생성자
    constructor(props) {
        super(props);
        this.state = {
            cnt: 0,
            no: 1,
        };
        console.log("constructor");
    }

    increase = () => {
        this.setState({ 
            cnt: this.state.cnt + 1,
            no: this.state.no + 1,
        })
        console.log("setState", this.state);
    };

    componentDidMount() {
        // init api call
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate', this.state);
    }

    render() {
        console.log("render");
        return (
            <div>
                <div>state:{this.state.cnt}</div>
                <button onClick={this.increase}>Click me</button>
                { this.state.cnt < 3 && <BookClass num={this.state.no}/> }
            </div>
        )
    }
}
