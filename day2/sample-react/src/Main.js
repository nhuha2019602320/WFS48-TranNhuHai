import React, { Component } from 'react'
import Post from './Post.js'
export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            classWeb: 48,
            textWelcome: ''
        }
    }

    render() {
        return (
            <div>
            <p>
              Hello Web {this.state.textWelcome}
            </p>
            <button onClick={() => {
                this.setState({
                    classWeb: this.state.classWeb-1,
                })
            }}>OK</button>
            <input type="text"
                onChange = {(event) => {
                    this.setState({
                        textWelcome: event.target.value
                    })
                }}
            placeholder={'xin mời nhập vào'}/>
            <Post name={'Hải'} age = {10}></Post>
            <Post name={'Hải2'}></Post>
            <Post name={'Hải3'} age ={22}></Post>
            <Post name={'Hải4'}></Post>
          </div>
        )
    }
}
