import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AddTask from '../AddTask/AddTask'
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

class AddTaskButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    toggleANTBool = () => {
      this.props.displayTaskInfoFlip(false)
      this.props.displayCalBoolFlip(false)
      this.props.helpBoolFlip(false)
      if (this.props.displayANTBool === false){
        this.props.displayANTBoolFlip(true)
      }
      else {
        this.props.displayANTBoolFlip(false)
      }
    }
    render() {
        return (
            <div className="App">
                <Button className='AddTaskButton' onClick={() => {this.toggleANTBool()}}>Add Task</Button>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTaskButton)
