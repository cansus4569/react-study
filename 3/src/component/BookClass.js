import React, { Component } from 'react'

export default class BookClass extends Component {
    render() {
        return (
            <div>
                Book{this.props.num}
            </div>
        )
    }
}
