import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
    initialHelpBoolFlip,
    displayANTBoolFlip,
    displayTaskInfoFlip,
    displayCalBoolFlip,
    helpBoolFlip
} from '../actions'

const mapStateToProps = state => {
    return {
        initialHelpBool: state.helpBool.initialHelpBoolVar,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initialHelpBoolFlip: (bool) => dispatch(initialHelpBoolFlip(bool)),
        displayTaskInfoFlip: (bool) => dispatch(displayTaskInfoFlip(bool)),
        displayCalBoolFlip: (bool) => dispatch(displayCalBoolFlip(bool)),
        displayANTBoolFlip: (bool) => dispatch(displayANTBoolFlip(bool)),
        helpBoolFlip: (bool) => dispatch(helpBoolFlip(bool))
    }
}

class Help extends Component {

    constructor() {
        super()
        this.state = {
            events: []
        }
    }

    onLetsBegin = () => {
        this.props.initialHelpBoolFlip(false)
        this.props.displayANTBoolFlip(false)
        this.props.displayCalBoolFlip(false)
        this.props.helpBoolFlip(false)
        this.props.displayTaskInfoFlip(false)
    }

    toggleHelpInitial = () => {
        if (this.props.initialHelpBool === true) {
            return (
                <Button variant = 'contained' color='primary' className='AddTaskButton' onClick={() => { this.onLetsBegin() }}>Let's Begin!</Button>
            )
        }
        else {
            return;
        }
    }

    render() {
        return (
            <div className='helpParentDiv'>
                <div className='helpContentDiv'>
                    <h1>WELCOME TO TASK MANAGER</h1>
                    <p>Task manager is the easiest way to organise all your work.</p>
                    <p>First, click the "Add Task" button located right next to "YOUR TASKS" on the top of your screen.
                       There, input the task name, due date, and difficulty. If you have multiple components to completing your task,
                       click "Add Subtask" and add as many sub tasks as you have. Once you are done, hit "Submit!"</p>
                    <p>To access a calendar view of all your events, simply click "View Calendar", also located at the top of your screen.</p>
                    <p>If you click "YOUR TASKS", you will see circles of various sizes. Each circle represents one of your tasks. The bigger the circle, the bigger your task.
                    Above each circle is the name of each of your tasks. Click on them to access more details for each one. There, if you click on a sub task, you will see a "Complete" button at the bottom
                    of the screen. Click that button to mark that you have completed a sub task and the size of your circle will reduce. If you have completed your overall task, click the "Completed" button located
                    right below the due date, and the task will be removed.</p>
                    <p>To access this page again, click the "Help" button at the top of your screen</p>
                    <p>Good luck with your work!</p>
                    <p>Developed by Vishal, Efe, Sid, and David</p>
                    {this.toggleHelpInitial()}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Help)