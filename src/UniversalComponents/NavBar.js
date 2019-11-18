import React, { Component } from "react";
import { connect } from 'react-redux'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AddTaskButton from './AddTaskButton';
import ViewCalButton from './ViewCalButton'
import '../index.css'
import {
    displayTaskInfoFlip,
    displayANTBoolFlip,
    displayCalBoolFlip
} from '../actions'


const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        displayTaskInfoFlip: (bool) => dispatch(displayTaskInfoFlip(bool)),
        displayCalBoolFlip: (bool) => dispatch(displayCalBoolFlip(bool)),
        displayANTBoolFlip: (bool) => dispatch(displayANTBoolFlip(bool)),
    }
}

const style = {

    background : '#2E3B55'
};


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    goBack = () => {
        this.props.displayTaskInfoFlip(false)
        this.props.displayANTBoolFlip(false)
        this.props.displayCalBoolFlip(false)
    }

    render() {
        return (
            <div className="App">
                <AppBar position="static" style={{ background: '#D2A722' }}>
                    <Toolbar>
                        <img src={require('../images/back_button.png')} className='backButton' onClick={() => this.goBack()} />
                        <h1 className='NavBarTypography'>
                            YOUR TASKS
                        </h1>
                        <AddTaskButton />
                        <ViewCalButton />
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)