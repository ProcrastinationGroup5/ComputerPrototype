import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { logInBoolFlip, setName } from '../actions';
import { userInfo } from '../Data/userInfo'

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logInBoolFlip: (bool) => dispatch(logInBoolFlip(bool)),
        setName: (name) => dispatch(setName(name))
    }
}


class Inputs extends Component {
    constructor() {
        super()
        this.state = {
            resetNameBool: true,
            resetPasswordBool: true,
            name: '',
            password: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if (name === 'name') {
            this.setState({ resetNameBool: false })
        }
        else if (name === 'password') {
            this.setState({ resetPasswordBool: false })
        }

        this.setState({
            [name]: value
        });

    }

    handleSubmit = () => {

        if (this.state.resetNameBool === true || this.state.resetPasswordBool === true) {
            return window.alert('Please fill in all required fields.')
        }
        else {
            let logInSuccess = false;
            for (let i = 0; i < userInfo.length; i++) {
                if (userInfo[i].name === this.state.name && userInfo[i].password === this.state.password) {
                    logInSuccess = true;
                    break;
                }
            }
            if (logInSuccess === true) {
                this.props.logInBoolFlip(true);
                this.props.setName(this.state.name)
            }
            else {
                window.alert('Please input the correct name and password')
            }
            this.setState({
                resetNameBool: true,
                resetPasswordBool: true,
                name: '',
                password: '',
            })

        }
    }

    resetInput = (bool, string, onClickFunction, name, type) => {
        if (bool === true) {
            return <input name={name} id='txt' value={string} type={type} onChange={onClickFunction}></input>
        }
        else {
            return <input name={name} id='txt' type={type} onChange={onClickFunction}></input>
        }
    }

    render() {
        return (
            <div className='logInForm'>
                <form className='logInInputs'>
                    <h1 style = {{fontSize: '6vh'}}>TASK MANAGER</h1><br />
                    <label>
                        <h1>Username: </h1>
                        {this.resetInput(this.state.resetNameBool, '', this.handleInputChange, 'name', 'text')}
                    </label><br />
                    <label>
                        <h1>Password: </h1>
                        {this.resetInput(this.state.resetPasswordBool, '', this.handleInputChange, 'password', 'password')}
                    </label><br />
                    <Button size='small' variant="outlined" onClick={() => { this.handleSubmit() }}>
                        Log In
                    </Button>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inputs)