import React, { Component } from "react";
import { connect } from 'react-redux'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AddTaskButton from './AddTaskButton';
import ViewCalButton from './ViewCalButton';
import HelpButton from './HelpButton';
import LogOut from './LogOut'
import '../index.css'
import {
    displayTaskInfoFlip,
    displayANTBoolFlip,
    displayCalBoolFlip,
    helpBoolFlip
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
        helpBoolFlip: (bool) => dispatch(helpBoolFlip(bool))
    }
}

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
        this.props.helpBoolFlip(false)
    }

    render() {
        return (
            <div className="App">
                <AppBar position="static" style={{ background: '#0d47a1' }}>
                    <Toolbar>           
                        <h1 className='NavBarTypography'  onClick={() => this.goBack()}>
                            YOUR TASKS
                        </h1>
                        <AddTaskButton />
                        <ViewCalButton />
                        <HelpButton />
                        <LogOut />
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)