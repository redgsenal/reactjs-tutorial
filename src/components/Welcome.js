import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        const {name, heroName} = this.props;
        return (
            <div className="Welcome">
                <h1>Welcome {name} aka {heroName} home!</h1>
            </div>
        );
    }
}

export default Welcome;