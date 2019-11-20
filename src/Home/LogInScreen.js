import React, { Component } from 'react';
import { connect } from 'react-redux';
import Inputs from './Inputs'
import {
    logInBoolFlip
} from '../actions'

const mapStateToProps = state => {
    return {
        tasks: state.editTasks.tasksVar,
        logIn: state.logIn.logInVar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logInBoolFlip: (bool) => dispatch(logInBoolFlip(bool))
    }
}

class LogInScreen extends Component {

    render() {
        return (
            <div>
                <Inputs/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInScreen)