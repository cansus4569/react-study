import React, { Component } from 'react';
import './App.css';
import BoxClass from './components/BoxClass';

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

export default class AppClass extends Component {
    // 생성자
    constructor(props) {
        super(props);
        this.state = {
            item: init.init,
            aiItem: init.init,
            result: "",
        };
    }

    run = (type) => {
        let ai = this.randomValue();
        let result = this.calculation(ele[type], ai);
        this.setState({
            item: ele[type],
            aiItem: ai,
            result: result,
            // result: this.calculation(ele[type], ai), // 이런식으로도 코딩 가능
        });
    };
    randomValue = () => {
        let arr = Object.keys(ele);
        let random = Math.floor(Math.random() * 100 % 3);
        let result = arr[random];
        return ele[result];
    };
    calculation = (you, ai) => {
        switch (you.name) {
            case ai.name:
                return "tie"
            case "rock":
                return ai.name == "cut" ? "win" : "lose";
            case "cut":
                return ai.name == "bo" ? "win" : "lose";
            case "bo":
                return ai.name == "rock" ? "win" : "lose";
        }
    };
    render() {
        return (
            <div>
                <div className="main">
                    <BoxClass target="You" item={this.state.item} result={this.state.result} />
                    <BoxClass target="AI" item={this.state.aiItem} result={this.state.result} />
                </div>
                <div className="main">
                    <button onClick={() => this.run("cut")}>가위</button>
                    <button onClick={() => this.run("rock")}>바위</button>
                    <button onClick={() => this.run("bo")}>보</button>
                </div>
            </div>
        )
    }
}