// rafce (reactArrowFunctionExportComponent)
// Extension : ES7 React/Redux/GraphQL/React-Native snippets 
import React from '../../../02 game1 (function component)/node_modules/@types/react'

const Book = (props) => {
    console.log('props : ', props);
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
