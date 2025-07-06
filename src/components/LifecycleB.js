import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'LifecycleB'
        }
        console.log('> LifecycleB constructor')
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('> LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('*** > LifecycleB componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('> LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('> LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    // componentDidUpdate: commonly use methods in update lifecycle
    componentDidUpdate() {
        console.log('> LifecycleB componentDidUpdate')
    }

    // render: commonly use methods in update lifecycle
    render() {
        return (
            <>
                {console.log('> LifecycleB render')}
                <div>
                    <h1>{this.state.name}</h1>
                </div>
            </>
        )
    }
}

export default LifecycleB
