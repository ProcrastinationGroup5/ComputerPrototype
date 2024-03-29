import Button from '@material-ui/core/Button';
import React, { Component } from "react";
import { connect } from 'react-redux'
import '../index.css'
import {
  displayANTBoolFlip,
  displayTaskInfoFlip,
  displayCalBoolFlip,
  helpBoolFlip,
  logInBoolFlip,
  setName
} from '../actions'

const mapStateToProps = state => {
  return {
    displayANTBool: state.displayANTBool.displayANTBoolVar,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    displayTaskInfoFlip: (bool) => dispatch(displayTaskInfoFlip(bool)),
    displayCalBoolFlip: (bool) => dispatch(displayCalBoolFlip(bool)),
    displayANTBoolFlip: (bool) => dispatch(displayANTBoolFlip(bool)),
    helpBoolFlip: (bool) => dispatch(helpBoolFlip(bool)),
    logInBoolFlip: (bool) => dispatch(logInBoolFlip(bool)),
    setName: (name) => dispatch(setName(name))
  }
}

class logOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  toggleLogOut = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      this.props.displayTaskInfoFlip(false)
      this.props.displayCalBoolFlip(false)
      this.props.helpBoolFlip(false)
      this.props.displayANTBoolFlip(false)
      this.props.logInBoolFlip(false)
      this.props.setName('')
    }
  }
  render() {
    return (
      <div className="App">
        <Button className='AddTaskButton' onClick={() => { this.toggleLogOut() }}>Log Out</Button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(logOut)
