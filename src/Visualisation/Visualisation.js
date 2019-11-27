import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Circle } from 'react-shapes';
import {
    displayTaskInfoFlip,
    displayANTBoolFlip,
    setTaskSelected,
    displayCalBoolFlip
} from '../actions'
import Button from '@material-ui/core/Button';
import NoTasks from './NoTasks'

const mapStateToProps = state => {
    return {
        tasks: state.editTasks.tasksVar,
        tasksLength: state.editTasks.tasksLength,
        name: state.logIn.nameVar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        displayTaskInfoFlip: (bool) => dispatch(displayTaskInfoFlip(bool)),
        displayANTBoolFlip: (bool) => dispatch(displayANTBoolFlip(bool)),
        displayCalBoolFlip: (bool) => dispatch(displayCalBoolFlip(bool)),
        setTaskSelected: (int) => dispatch(setTaskSelected(int))
    }
}

function todaysDate() {
    var today = new Date();
    var dd = today.getDate().toString();

    var mm1 = today.getMonth() + 1;
    var mm = mm1.toString();
    var yyyy = today.getFullYear().toString();
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    return (yyyy + '-' + mm + '-' + dd)
}

function dueDateColor(dateString) {
    if (todaysDate() > dateString) {
        return "secondary";
    }
    else if (todaysDate() === dateString){
        return "primary"
    }
    else {
        return "default";
    }
}

class Visualisation extends Component {

    taskNameClicked = (i) => {
        this.props.displayANTBoolFlip(false)
        this.props.displayTaskInfoFlip(true)
        this.props.displayCalBoolFlip(false)
        this.props.setTaskSelected(i)
    }

    circleColor = (i) => {
        if (this.props.tasks[i].difficulty === 'Easy') {
            return '#fca503'
        }
        else if (this.props.tasks[i].difficulty === 'Medium') {
            return '#2409ba'
        }
        else {
            return '#fc0303'
        }
    }

    displayTasks = (tasksList) => {
        if (tasksList.length === 0) {
            return (<div><NoTasks /></div>)
        }
        else {
            return tasksList
        }
    }

    render() {

        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }

        const tasksList = [];

        for (let i = 0; i < this.props.tasksLength; i++) {
            if (this.props.tasks[i].user === this.props.name) {
                let leftMargin = getRandomArbitrary(20, 50) + '%'
                tasksList.push(
                    <div style={{ marginLeft: leftMargin, textAlign: "center", marginTop: '15px'}}>
                        <Button variant = 'outlined' color = {dueDateColor(this.props.tasks[i].date)} className='taskNameButton' onClick={() => { this.taskNameClicked(i) }}>{this.props.tasks[i].name}</Button><br />
                        <Circle r={(this.props.tasks[i].numberSubtasks+1) * 60} fill={{ color: this.circleColor(i) }} /> <br />
                    </div>
                )
            }
        }

        return (
            <div>
                {this.displayTasks(tasksList)}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Visualisation)