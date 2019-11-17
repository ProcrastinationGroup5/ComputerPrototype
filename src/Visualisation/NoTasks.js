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
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoTasks)