import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Circle } from 'react-shapes';
import {
} from '../actions'
import Button from '@material-ui/core/Button';

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

class NoTasks extends Component {

    render() {
        return (
            <div className='noTasks'>
                You have no tasks to complete!
                <p className='noTasksHint'>(Hint: Click the "Add Tasks" button at the top of the screen to add some)</p>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoTasks)