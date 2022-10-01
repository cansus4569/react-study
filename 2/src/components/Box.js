import React from 'react'

const Box = (props) => {
    let result;
    if(props.target === "AI" && props.result !== "tie" && props.result !== "") {
        result = props.result === "win" ? "lose" : "win";
    } else {
        result = props.result
    }
    return (
        <div className={`box ${result}`}>
            <h1>{props.target}</h1>
            <img className="img" src={props.item && props.item.img} />
            <h2>{result}</h2>

        </div>
    )
}

export default Box