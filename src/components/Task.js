import React, { Component } from 'react'

import {connect} from 'react-redux'


class Task extends Component {
    constructor(props) {
        super(props);
    }

    render() {   

        return (
            <li>id : {this.props.id} --  name : {this.props.name}</li>
        )
    }
}
export default Task;