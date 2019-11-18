import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import {
    addNewTask,
    displayANTBoolFlip
} from '../actions'


const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewTask: (form) => dispatch(addNewTask(form)),
        displayANTBoolFlip: (bool) => dispatch(displayANTBoolFlip(bool))
    }
}

function isValidDate(dateString) {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regEx)) return false;  // Invalid format
    var d = new Date(dateString);
    var dNum = d.getTime();
    if (!dNum && dNum !== 0) return false; // NaN value, Invalid date
    return d.toISOString().slice(0, 10) === dateString;
}

class AddTask extends Component {

    constructor() {
        super()
        this.state = {

            numberSubtasks: 0,

            subtasks: new Array(this.numberSubtasks),

            formControls: {
                name: {
                    value: ''
                },
                date: {
                    value: ''
                },
                difficulty: {
                    value: ''
                }
            }
        }

    }

    changeHandler = event => {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            formControls: {
                ...this.state.formControls,
                [name]: {
                    ...this.state.formControls[name],
                    value
                }
            }
        });

    }

    handleSubtaskChange = (i, event) => {

        const newSubtasks = this.state.subtasks.slice()
        newSubtasks[i] = event.target.value
        this.setState({ subtasks: newSubtasks })
    }

    handleSubmit = () => {

        if (this.state.formControls.difficulty.value == 'intro' || this.state.formControls.difficulty.value == '') {
            window.alert('Please select difficulty')
        }

        if (!(isValidDate(this.state.formControls.date.value))) {
            window.alert('Please input a valid date')
        }

        else {
            this.setState({
                formControls: {
                    name: {
                        value: ''
                    },
                    date: {
                        value: ''
                    },
                    difficulty: {
                        value: ''
                    }
                },
                numberSubtasks: 0
            })

            this.props.addNewTask({
                name: this.state.formControls.name.value,
                date: this.state.formControls.date.value,
                difficulty: this.state.formControls.difficulty.value,
                subtasks: this.state.subtasks,
                numberSubtasks: this.state.numberSubtasks
            })

            this.props.displayANTBoolFlip(false)

        }
    }

    render() {
        const subTaskInputs = [];

        for (let i = 0; i < this.state.numberSubtasks; i++) {
            subTaskInputs.push(<div className='taskFormInput'><input type="text"
                className='addInputSubtask'
                onChange={(event) => this.handleSubtaskChange(i, event)}
            /><br /></div>)
        }

        return (
            <form className = 'taskForm'>
                <div id = 'left'>
                {/* <div className='taskFormInput'> */}
                    <label className='addTaskInputNameLabel'>Task Name</label><br />
                    <input type="text"
                        name="name"
                        className='addTaskInputName'
                        value={this.state.formControls.name.value}
                        onChange={this.changeHandler}
                    />
                {/* </div> */}

                <div>
                    {subTaskInputs}
                </div>

                <div className='taskFormActionButtons'>
                    <Button variant = 'contained' startIcon={<AddIcon />} color = 'primary' size='small' onClick={() => {
                        this.setState({
                            numberSubtasks: this.state.numberSubtasks + 1
                        })
                    }}>
                        Add SubTask
                </Button>
                </div>

                </div>
                
                <div id = 'right'>

                <div className='taskFormInput' id = 'datedifblock'>
                    <label className='addTaskInputDateLabel'>Due Date</label><br />
                    <input type="date"
                        name="date"
                        className='addTaskInputDate'
                        value={this.state.formControls.date.value}
                        onChange={this.changeHandler}
                    />
                </div>

                <div className='taskFormInput' id = 'datedifblock'>
                    <label className='addTaskInputDifficultyLabel'>Difficulty</label><br />
                    <select name="difficulty"
                        value={this.state.formControls.difficulty.value}
                        className='addTaskInputDifficulty'
                        onChange={this.changeHandler}>
                        <option value='intro'>Select Difficulty:</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Difficult">Difficult</option>
                    </select>
                </div>

                <div className='taskFormActionButtonsSubmit'  id = 'datedifblock'>
                <Button variant = 'contained' color = 'primary' size='large' onClick={() => {
                        this.handleSubmit()
                    }}>
                        Submit
                </Button>
                </div>



                </div>

                

            </form>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask)