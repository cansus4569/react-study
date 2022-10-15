import React, { Component } from 'react'

export default class BookClass extends Component {
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        return (
            <div>
                Book{this.props.num}
            </div>
        )
    }
}