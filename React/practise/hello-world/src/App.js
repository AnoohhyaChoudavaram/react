
import './App.css';
import Greet from './components/Greet';
import React, { Component } from 'react';
import Welcome from './components/welcome';
import Hello from './components/Hello';
import Message from './components/message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
        <Inline /> */}
        {/* <Stylesheet primary = {true} /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <ClassClick /> */}
        {/* <FunctionClick /> */}
        {/* <Counter /> */}
        {/* <Message /> */}

        {/* <Greet name="bruce" heroName="Batman" >
          <p>This is a children props</p>
        </Greet>
        <Greet name="clark" heroName="Superman">
          <button>Action</button>
        </Greet> */}
        {/* <Greet name="Diana" heroName="Wonder woman" /> */}
      
        {/* <Welcome name="bruce" heroName="Batman"/>  */}
        {/* <Welcome name="clark" heroName="Superman"/>
        <Welcome name="Diana" heroName="Wonder woman"/> */}
      {/* <Hello /> */}
      </div>
    );

  }
}
 
export default App;
