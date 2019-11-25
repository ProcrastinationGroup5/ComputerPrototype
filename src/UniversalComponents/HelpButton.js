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
      displayCalBool: state.displayCalBool.displayCalBoolVar,
      helpBool: state.helpBool.helpBoolVar
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

class HelpButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    toggleHelpBool = () => {
      this.props.displayTaskInfoFlip(false)
      this.props.displayANTBoolFlip(false)
      this.props.displayCalBoolFlip(false)
      if (this.props.helpBool === false){
        this.props.helpBoolFlip(true)
      }
      else {
        this.props.helpBoolFlip(false)
      }
    }
    render() {
        return (
            <div className="App">
                <Button className='AddTaskButton' onClick={() => {this.toggleHelpBool()}}>Help</Button>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HelpButton)
