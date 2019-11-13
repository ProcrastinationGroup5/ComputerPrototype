import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../UniversalComponents/NavBar'
import MainDisplay from '../MainDisplay/MainDisplay'

const mapStateToProps = state => {
    return {
        tasks: state.editTasks.tasksVar
    }
}

class Home extends Component {
    render() {
        return(
            <div>
                <NavBar/>
                <MainDisplay/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Home)