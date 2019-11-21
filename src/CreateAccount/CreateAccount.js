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
  createAccountBoolFlip,
  logInBoolFlip,
  addAccount
} from '../actions'

const mapStateToProps = state => {
  return {
    displayANTBool: state.displayANTBool.displayANTBoolVar,
    displayCalBool: state.displayCalBool.displayCalBoolVar,
    helpBool: state.helpBool.helpBoolVar,
    userInfo: state.userInfoReducer.userInfoVar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createAccountBoolFlip: (bool) => dispatch(createAccountBoolFlip(bool)),
    logInBoolFlip: (bool) => dispatch(logInBoolFlip(bool)),
    addAccount: (account) => dispatch(addAccount(account))
  }
}

class CreateAccount extends Component {
  constructor() {
    super()
    this.state = {
      resetNameBool: true,
      resetPasswordBool: true,
      resetPassword2Bool: true,
      name: '',
      password: '',
      password2: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  toggleCreateAccountBool = () => {
    this.props.logInBoolFlip(false)
    this.props.createAccountBoolFlip(false)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === 'name') {
      this.setState({ resetNameBool: false })
    }
    else if (name === 'password') {
      this.setState({ resetPasswordBool: false })
    }
    else if (name === 'password2') {
      this.setState({ resetPassword2Bool: false })
    }

    this.setState({
      [name]: value
    });

  }

  handleSubmit = () => {

    if (this.state.resetNameBool === true || this.state.resetPasswordBool === true) {
      return window.alert('Please fill in all required fields.')
    }
    else {
      for (let i = 0; i < this.props.userInfo.length; i++) {
        if (this.state.name === this.props.userInfo[i].name) {
          return window.alert('Please select another username. This one is taken')
        }
        else {
          if (this.state.password !== this.state.password2) {
            return window.alert('Please make sure your passwords match')
          }
          else {
            this.props.addAccount({ name: this.state.name, password: this.state.password })
            this.toggleCreateAccountBool()
            this.setState({
              resetNameBool: true,
              resetPasswordBool: true,
              resetPassword2Bool: true,
              name: '',
              password: '',
            })
          }
        }
      }
    }
  }

  resetInput = (bool, string, onClickFunction, name, type) => {
    if (bool === true) {
      return <input name={name} id='txt' value={string} type={type} onChange={onClickFunction}></input>
    }
    else {
      return <input name={name} id='txt' type={type} onChange={onClickFunction}></input>
    }
  }

  render() {
    return (
      <div className='logInForm'>
        <form className='logInInputs'>
          <h1 style={{ fontSize: '6vh' }}>CREATE ACCOUNT</h1><br />
          <label>
            <h1>Username: </h1>
            {this.resetInput(this.state.resetNameBool, '', this.handleInputChange, 'name', 'text')}
          </label><br />
          <label>
            <h1>Password: </h1>
            {this.resetInput(this.state.resetPasswordBool, '', this.handleInputChange, 'password', 'password')}
          </label><br />
          <label>
            <h1>Retype Password: </h1>
            {this.resetInput(this.state.resetPassword2Bool, '', this.handleInputChange, 'password2', 'password')}
          </label><br />
          <Button size='small' variant="outlined" onClick={() => { this.handleSubmit() }}>
            Create Account
          </Button><br/>
          <Button size='small' variant="outlined" onClick={() => {this.props.createAccountBoolFlip(false)}}>I Already Have an Account</Button>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)