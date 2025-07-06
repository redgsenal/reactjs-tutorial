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

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    // componentDidUpdate: commonly use methods in update lifecycle
    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        console.log('+++ LifecycleA changeState')
        // This will trigger the lifecycle methods in update lifecycle
        this.setState({
            name: 'Updated LifecycleA'
        })
    }
    // render: commonly use methods in lifecycle
    render() {
        return (
            <>
                {console.log('LifecycleA render')}
                <div>
                    <h1>{this.state.name}</h1>
                    <button onClick={this.changeState}>Update LifecycleA</button>
                    <LifecycleB />
                </div>
            </>
        )
    }
}

export default LifecycleA
