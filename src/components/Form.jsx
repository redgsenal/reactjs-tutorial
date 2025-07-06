import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '', // Initialize username state
            email: '', // Initialize email state
            comments: '', // Initialize comments state
            selectOption: '' // Initialize selectOption state
        }
    }

    handleInputChange = (event) => {
        const { id, value } = event.target  // Destructure id and value from event.target               
        this.setState({
            [id]: value  // Use computed property name to set state dynamically
        })
    }

    handleSubmit = (event) => {
        event.preventDefault() // Prevent the default form submission behavior      
        console.log('Form submitted with the following data:');
        console.log(`Username: ${this.state.username}`)
        console.log(`Email: ${this.state.email}`);
        console.log(`Comments: ${this.state.comments}`);
        console.log(`Selected Option: ${this.state.selectOption}`);
        // Here you can handle the form submission, e.g., send data to a server
    }

    render() {
        const { username, email, comments, selectOption } = this.state; // Destructure state for easier access
        return (
            <div>
                <h2>Form Component</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username: </label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address: </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comments">Comments: </label>
                        <textarea
                            className="form-control"
                            type="text"
                            id="comments"
                            placeholder="Enter your comments"
                            value={comments || ''} // Ensure comments is defined
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="select">Select an Option: </label>
                        <select
                            className="form-control"
                            id="selectOption"
                            value={selectOption || ''} // Ensure selectOption is defined
                            onChange={this.handleInputChange}>
                            <option value="">Select an option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                            <option value="option4">Option 4</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        )
    }
}

export default Form
