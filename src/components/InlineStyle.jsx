import React from 'react'

function InlineStyle() {
    const divStyle = {
        color: 'blue',
        fontSize: '62px',
        padding: '10px',
        border: '1px solid black',
        backgroundColor: 'lightgray'
    };
    return (
        <div style={divStyle}>Hello World</div>
    )
}

export default InlineStyle