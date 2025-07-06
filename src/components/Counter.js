import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    incrementCount() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }), () => {
            console.log('Count updated:', this.state.count)
        })
    }

    render() {
        return (
            <div>
                <p>Counter - {this.state.count}</p>
                <button onClick={() => this.incrementCount()}>Increment Count</button>
            </div>
        )
    }
}

export default Counter