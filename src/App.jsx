import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameLists from './components/NameLists';
import StyleSheet from './components/StyleSheet';
import InlineStyle from './components/InlineStyle';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';

import './appStyles.css'
import styles1 from './appStyles1.module.css'
import styles2 from './appStyles2.module.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <LifecycleA />
        {/* <Form /> */}
        {/* <h1 className={styles1.success}>Success in Hello World</h1>
        <h1 className={styles2.success}>Success in Hello World</h1>
        <h1 className='${styles.error}'>Error in Hello World</h1> */}
        {/* <InlineStyle /> */}
        {/* <StyleSheet isPrimary={false} /> */}
        {/* <NameLists /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind/> */}
        {/* <Counter /> */}
        {/* <Greet name="John" heroName="Superman" />*/}
        {/* <Welcome name="Jane" heroName="Wonder Guy" /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
      </div >
    );
  }
}
export default App;
