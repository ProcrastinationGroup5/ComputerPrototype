import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTask from '../AddTask/AddTask';
import Visualisation from '../Visualisation/Visualisation';
import TaskDetails from '../TaskDetails/TaskDetails'

const mapStateToProps = state => {
    return {
        displayANTBool: state.displayANTBool.displayANTBoolVar,
        displayTaskInfoBool: state.displayTaskInfoBool.displayTaskInfoBoolVar
    }
}

class MainDisplay extends Component {

    mainDisplay = () => {
        if (this.props.displayANTBool===true){
            return (
                <div>
                    <AddTask/>
                </div>
            )
        }
        else if (this.props.displayTaskInfoBool===true){
            return (
                <div>
                    <TaskDetails/>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Visualisation/>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.mainDisplay()}
            </div>
        )
    }
}

export default connect(mapStateToProps)(MainDisplay)