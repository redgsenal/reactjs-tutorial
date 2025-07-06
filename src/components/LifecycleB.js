import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'LifecycleB'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('*** LifecycleB componentDidMount')
    }

    render() {
        return (
            <>
                {console.log('LifecycleB render')}
                <div>
                    <h1>{this.state.name}</h1>
                </div>
            </>
        )
    }
}

export default LifecycleB
