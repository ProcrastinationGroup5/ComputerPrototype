import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import {
    displayTaskInfoFlip,
    addNewSubtask,
    completeSubtask,
    completeTask,
    displayANTBoolFlip,
    displayCalBoolFlip,
    helpBoolFlip
} from '../actions'

const mapStateToProps = state => {
    return {
        tasks: state.editTasks.tasksVar,
        tasksLength: state.editTasks.tasksLength,
        selectedTask: state.setTaskSelected.taskSelectedVar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        displayTaskInfoFlip: (bool) => dispatch(displayTaskInfoFlip(bool)),
        addNewSubtask: (array) => dispatch(addNewSubtask(array)),
        completeSubtask: (array) => dispatch(completeSubtask(array)),
        completeTask: (str) => dispatch(completeTask(str)),
        displayANTBoolFlip: (bool) => dispatch(displayANTBoolFlip(bool)),
        displayCalBoolFlip: (bool) => dispatch(displayCalBoolFlip(bool)),
        helpBoolFlip: (bool) => dispatch(helpBoolFlip(bool))
    }
}

class TaskDetails extends Component {

    constructor() {
        super()
        this.state = {
            selectedTaskDetailRow: '',
            numberAdditionalSubtasks: 0,
            additionalSubtasks: new Array(this.numberAdditionalSubtasks),
            additionalSubtaskButtonPressed: false
        }
    }

    bgColor = (index) => {
        if (this.state.selectedTaskDetailRow === '') {
            return 'white';
        }
        if (this.state.selectedTaskDetailRow === index) {
            return '#d1d1d1';
        } else {
            return 'white';
        }
    }

    handleChange = (index) => {
        if (this.state.selectedTaskDetailRow !== index) {
            this.setState({
                selectedTaskDetailRow: index
            })
        } else {
            this.setState({
                selectedTaskDetailRow: ''
            })
        }
    }

    handleAdditionalSubtaskChange = (i, event) => {

        const newAdditionalSubtasks = this.state.additionalSubtasks.slice()
        newAdditionalSubtasks[i] = event.target.value
        this.setState({
            additionalSubtasks: newAdditionalSubtasks,
            selectedTaskDetailRow: ''
        })
    }

    handleSubmit = () => {

        if (!this.state.additionalSubtaskButtonPressed) {
            window.alert('Please add subtasks before pressing Submit')
        }

        else {
            this.props.addNewSubtask({
                index: this.props.selectedTask,
                items: this.state.additionalSubtasks
            })

            this.setState({
                selectedTaskDetailRow: '',
                numberAdditionalSubtasks: 0,
            })

            this.props.displayTaskInfoFlip(false);
        }

    }

    handleComplete = () => {
        this.props.completeSubtask({
            index: this.props.selectedTask,
            item: this.props.tasks[this.props.selectedTask].subtasks[this.state.selectedTaskDetailRow]
        })
        this.setState({
            selectedTaskDetailRow: ''
        })
    }

    renderCompleteButton = () => {
        if (this.state.selectedTaskDetailRow !== '') {
            return (
                <div>
                    <Button size='small' onClick={() => { this.handleComplete() }}>
                        Completed
                    </Button>
                </div>
            )
        }
    }

    handleTaskComplete = () => {
        this.props.completeTask(
            this.props.tasks[this.props.selectedTask].name
        )
        this.props.displayTaskInfoFlip(false)
        this.props.displayANTBoolFlip(false)
        this.props.displayCalBoolFlip(false)
        this.props.helpBoolFlip(false)
    }

    render() {

        const subTaskInputs = [];

        for (let i = 0; i < this.state.numberAdditionalSubtasks; i++) {
            subTaskInputs.push(<input type="text"
                className='addInputSubtaskTaskDetails'
                onChange={(event) => this.handleAdditionalSubtaskChange(i, event)}
            />)
        }

        return (
            <div className='taskDetailsTable'>
                <div className='taskDetailsInfo'>
                    <h1>{this.props.tasks[this.props.selectedTask].name}</h1>
                    <h2>Due Date: {this.props.tasks[this.props.selectedTask].date}</h2>
                    <Button size='small' onClick={() => { this.handleTaskComplete() }}>
                        Completed
                    </Button>
                    <Table>
                        <TableBody>
                            {this.props.tasks[this.props.selectedTask].subtasks.map((subtask, index) => (
                                <TableRow key={index} onClick={event => this.handleChange(index)} style={{ backgroundColor: this.bgColor(index) }}>
                                    <TableCell component="th" scope="row">
                                        {subtask}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <div>
                        {subTaskInputs}
                    </div>
                    <Button size='small' onClick={() => {
                        this.setState({
                            numberAdditionalSubtasks: this.state.numberAdditionalSubtasks + 1,
                            additionalSubtaskButtonPressed: true
                        })
                    }}>
                        Add SubTask
                </Button>

                    <Button size='small' onClick={() => { this.handleSubmit() }}>
                        Submit
                </Button>

                    {this.renderCompleteButton()}

                </div>
            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails)