import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }


    render() {
        /* const message = this.state.isLoggedIn ? 'Welcome User' : 'Welcome Guest';
        return (
            <div>
                <h1>Login Greetings</h1>
                <h3>{message}</h3>
                <p>{this.state.isLoggedIn ? '1' : '0'}</p>
            </div>
        ) */

        return this.state.isLoggedIn &&
            (
                <div>
                    <h1>Login Greetings</h1>
                    <h3>Welcome User</h3>
                </div>
            )
    }
}

export default UserGreeting
