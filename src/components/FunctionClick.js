import React from 'react';
// This component demonstrates a simple button click event handler in React.
function FunctionClick() {
    function handleClick() {
        console.log('Button clicked');
    }

    return (
        <div>
            <p>Function Click</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default FunctionClick;
// This component defines a button that, when clicked, logs a message to the console.
// It uses a simple function to handle the click event, demonstrating how to use event handlers in  React.
// The component is exported for use in other parts of the application.     