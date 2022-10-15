// rafce (reactArrowFunctionExportComponent)
// Extension : ES7 React/Redux/GraphQL/React-Native snippets 
import React from 'react'

const Book = (props) => {
    return (
        <div>
            <div className="book">
                Book{props.num}
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default Book
