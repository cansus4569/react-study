import React, { Component } from 'react'

export default class BoxClass extends Component {
    // 개선 코드
    constructor() {
        super();
        this.result = "";
    }

    target = () => {
        if(this.props.target === "AI" && this.props.result !== "tie" && this.props.result !== "") {
            this.result = this.props.result === "win" ? "lose" : "win";
        } else {
            this.result = this.props.result
        }
    }
    render() {
        return (
            <div className={`box ${this.result}`}>
                <h1>{this.props.target}</h1>
                <img className="img" src={this.props.item && this.props.item.img} />
                <h2>{this.result}</h2>
            </div>
        )
    }
    // 초창기 내가 짠 소스
    // target = (props) => {
    //     let result;
        // if(props.target === "AI" && props.result !== "tie" && props.result !== "") {
        //     result = props.result === "win" ? "lose" : "win";
        // } else {
        //     result = props.result
        // }
    //     return result;
    // };
    // render() {
        // return (
        //     <div className={`box ${this.result}`}>
        //         <h1>{this.props.target}</h1>
        //         <img className="img" src={this.props.item && this.props.item.img} />
        //         <h2>{this.target(this.props)}</h2>
        //     </div>
        // )
    // }
}