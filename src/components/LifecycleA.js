import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'LifecycleA'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('*** LifecycleA componentDidMount')
    }

    render() {
        return (
            <>
                {console.log('LifecycleA render')}
                <div>
                    <h1>{this.state.name}</h1>
                    <LifecycleB />
                </div>
            </>
        )
    }
}

export default LifecycleA
