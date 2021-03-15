import React, { Component } from 'react'
class Post extends Component {
    render() {
        let {name, age} = this.props;
        let showAge = '';
        if(age) {
            showAge = ", có số tuổi là " + age;
        }
        return (
            <div>
                Dây là {name}, {showAge}
            </div>
        )
    }
}
export default Post