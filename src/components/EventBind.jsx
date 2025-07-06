import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello World!'
        }

        /* this.clickHandler = this.clickHandler.bind(this); */
        // Binding the clickHandler method to the component instance
    }

    /* clickHandler() {
        this.setState({
            message: 'Button Clicked!'
        })
        console.log('Button clicked: ', this);
    } */

    clickHandler = () => {
        this.setState({
            message: 'You just clicked the button!'
        })
        console.log('Button clicked: ', this);
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* 
                this is not recommended as it creates a new function on every render
                <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/*
                Using an arrow function in the render method is not recommended
                because it creates a new function on every render, which can lead to performance issues.
                 Using an arrow function to bind 'this' context */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}
// This component demonstrates how to bind events in React.
// It can be used to handle events like clicks, form submissions, etc.
export default EventBind