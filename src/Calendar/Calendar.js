import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
} from '../actions'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

const mapStateToProps = state => {
    return {
        tasks: state.editTasks.tasksVar,
        tasksLength: state.editTasks.tasksLength
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

class Calendar extends Component {

    constructor(){
        super()
        this.state = {
            events: []
        }
    }

    render() {
        const events = [];

        for (let i = 0; i < this.props.tasksLength; i++) {
            let dateString = this.props.tasks[i].date
            let titleString = this.props.tasks[i].name
            events.push(
                { title: titleString, start: new Date(dateString), allDay:true}
            )
        }
        return (
            <FullCalendar events = {events} defaultView="dayGridMonth" plugins={[dayGridPlugin]}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)