import React from 'react'

let caractereslength = 0

function countLength(e) {
    caractereslength = e.target.value.length
}

const Textarea = (props) => (

    <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea name={props.name}
            id="content"
            className="form-control"
            rows="5"
            value={props.content}
            onChange={props.onFieldChange}
            onKeyPress={countLength}
        >
        </textarea>
        <small>{caractereslength} caracteres</small>
    </div>
)


export default Textarea
