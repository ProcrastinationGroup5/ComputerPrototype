import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Circle } from 'react-shapes';
import {
    displayTaskInfoFlip,
    displayANTBoolFlip,
    setTaskSelected
} from '../actions'
import Button from '@material-ui/core/Button';

const mapStateToProps = state => {
    return {
        tasks: state.editTasks.tasksVar,
        tasksLength: state.editTasks.tasksLength
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        displayTaskInfoFlip: (bool) => dispatch(displayTaskInfoFlip(bool)),
        displayANTBoolFlip: (bool) => dispatch(displayANTBoolFlip(bool)),
        setTaskSelected: (int) => dispatch(setTaskSelected(int))
    }
}

class Visualisation extends Component {

    taskNameClicked = (i) => {
        this.props.displayANTBoolFlip(false)
        this.props.displayTaskInfoFlip(true)
        this.props.setTaskSelected(i)
    }

    circleColor = (i) => {
        if (this.props.tasks[i].difficulty == 'Easy'){
            return '#fca503'
        }
        else if (this.props.tasks[i].difficulty == 'Medium'){
            return '#2409ba'
        }
        else {
            return '#fc0303'
        }
    }

    render() {

        const tasksList = [];

        for (let i = 0; i < this.props.tasksLength; i++) {            
            tasksList.push(
                <div>
                    <Button className='taskNameButton' onClick={() => { this.taskNameClicked(i) }}>{this.props.tasks[i].name}</Button><br/>
                    <Circle r={this.props.tasks[i].subtasks.length * 40} fill={{ color: this.circleColor(i) }} /><br />
                </div>
            )
        }

        return (
            <div>
                {tasksList}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Visualisation)