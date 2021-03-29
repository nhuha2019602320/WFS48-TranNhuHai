import React, { Component } from 'react'

import {withRouter} from 'react-router'
class Main extends Component {
    handleRouer = (url) => {
        this.props.history.push(url)
    }
    goToLogin = () => {
        this.handleRouer("/login")
    }
    goToSignUp = () => {
        this.handleRouer("/signup")//dduowngf danx
    }
    componentDidMount() {
        let profile = JSON.parse(localStorage.getItem('status'));
        if(!profile) {
            this.handRouter('/login')
        } else {
            this.setState({profile})
        }
    }
    render() {
        return (
            <div>
                <button onClick = {this.goToLogin}>
                    Login
                </button>
                <button onClick = {this.goToSignUp}>
                    SignUp
                </button>
                
            </div>
        )
    }
}
export default withRouter(Main)
