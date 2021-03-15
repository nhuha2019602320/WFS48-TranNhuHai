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
