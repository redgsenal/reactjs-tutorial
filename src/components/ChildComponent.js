import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <p>The button below is rendered from child component.</p>
            <p>Clicking the button below, it will greet the parent component:</p>
            <button onClick={() => props.greetHandler(`Child Component`)}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent