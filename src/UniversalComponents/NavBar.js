import React, { Component } from "react";
import { connect } from 'react-redux'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AddTaskButton from './AddTaskButton';
import '../index.css'

const mapStateToProps = state => {
    return {
    }
}

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <h1 className='NavBarTypography'>
                            YOUR TASKS
                        </h1>
                        <AddTaskButton />
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default connect(mapStateToProps)(NavBar)