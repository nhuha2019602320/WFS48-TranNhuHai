import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.state = {
            profile : null
        }

    }
       
    
        submit = () => {
            let user = JSON.parse(localStorage.getItem('user'))
            if(user && Array.isArray(user)) {
                user.push({
                    username : this.state.username,
                    password : this.state.password,
                })
                localStorage.setItem('user', JSON.stringify(user))
            } else {
                let newList = [];
                newList.push({
                    username: this.state.username,
                    password: this.state.password
                })
                localStorage.setItem('user', JSON.stringify(newList))
            }
        }

        handleUser = (event) => {
            this.setState ({username : event.target.value})
        }
        handlePassword = (event) => {
            this.setState ({password : event.target.value})
        }
        checkAccount = (username, password) => {
            let user = JSON.parse(localStorage.getItem('user'))
            let check = user.map(item =>item.username == username && item.password == password)
            return Array.isArray(check) && check.length == 1
        }
        submit = () => {
            if(this.checkAccount(this.state.username, this.state.password)) {
                this.props.history.push('/')
                localStorage.setItem('status', {
                    username: this.state.username,
                    password: this.state.password
                })
            } else {
                alert('false');
            }
        }
    render() {
        return (
            <div>
                <input type="text" onChange = {(e) => {
                    this.setState({
                        username : e.target.value
                    })
                }}  placeholder="user"/>
                <input onChange = {(e) => {
                    this.setState({
                        password :e.target.value
                    })
                }} placeholder="pass" type="password"/>
                <button onClick = {this.submit}>ok</button>
            </div>
        )
    }
}
