import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../UniversalComponents/NavBar'
import MainDisplay from '../MainDisplay/MainDisplay'
import LogInScreen from './LogInScreen'
import CreateAccount from '../CreateAccount/CreateAccount'
import {
    logInBoolFlip
} from '../actions'

const mapStateToProps = state => {
    return {
        tasks: state.editTasks.tasksVar,
        logIn: state.logIn.logInVar,
        createAccountBool: state.createAccountBool.createAccountBoolVar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logInBoolFlip: (bool) => dispatch(logInBoolFlip(bool))
    }
}

class Home extends Component {

    whatToDisplay = () => {
        if (this.props.logIn === true) {
            return (
                <div>
                    <NavBar />
                    <MainDisplay />
                </div>
            )
        } 
        else if (this.props.createAccountBool===true){
            return (
                <div>
                    <CreateAccount/>
                </div>
            )
        }
        else {
            return (
                <div>
                    <LogInScreen />
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.whatToDisplay()}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)