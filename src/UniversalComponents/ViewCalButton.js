import Button from '@material-ui/core/Button';
import React, { Component } from "react";
import { connect } from 'react-redux'
import '../index.css'
import {
  displayANTBoolFlip,
  displayTaskInfoFlip,
  displayCalBoolFlip,
  helpBoolFlip
} from '../actions'

const mapStateToProps = state => {
    return {
      displayANTBool: state.displayANTBool.displayANTBoolVar,
      displayCalBool: state.displayCalBool.displayCalBoolVar
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    displayTaskInfoFlip: (bool) => dispatch(displayTaskInfoFlip(bool)),
    displayCalBoolFlip: (bool) => dispatch(displayCalBoolFlip(bool)),
    displayANTBoolFlip: (bool) => dispatch(displayANTBoolFlip(bool)),
    helpBoolFlip: (bool) => dispatch(helpBoolFlip(bool))
  }
}

class ViewCalButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    toggleCalBool = () => {
      this.props.displayTaskInfoFlip(false)
      this.props.displayANTBoolFlip(false)
      this.props.helpBoolFlip(false)
      if (this.props.displayCalBool === false){
        this.props.displayCalBoolFlip(true)
      }
      else {
        this.props.displayCalBoolFlip(false)
      }
    }
    render() {
        return (
            <div className="App">
                <Button className='AddTaskButton' onClick={() => {this.toggleCalBool()}}>View Calendar</Button>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewCalButton)
