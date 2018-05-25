import React , { Component } from 'react';
import { connect } from 'react-redux';


export default class InputBox extends Component {
  constructor(props) {
    super(props);
    this.inputFeild = React.createRef();
    this.searchStudent = this.searchStudent.bind(this);
  }
  searchStudent (event) {
    event.preventDefault();
    let searchCurrentElement = this.inputFeild.current;
    let searchcurrentElementValue =searchCurrentElement.value
    if(searchcurrentElementValue) {
    }
    searchCurrentElement.value = '';
  }
  render() {
    return (
      <div className="inputBox">
        <input type = "text"
               ref = {this.inputFeild}/>
        <button onClick = {this.searchStudent} > Search </button>
      </div>
    )
  }
}
