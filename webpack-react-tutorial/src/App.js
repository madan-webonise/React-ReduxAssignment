import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputBox from './js/components/inputBox';
import StudentArray from '../src/js/components/Display'
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <InputBox />
        <StudentArray />
      </div>
    )
  }
}
