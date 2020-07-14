import React, { Component } from 'react'

import {connect} from 'react-redux'
import { Button, DatePicker, version } from "antd";
import * as actions from '../actions/index'

class Task extends Component {
    constructor(props) {
        super(props);
    }
    deletePost = (idPost)=>{
        this.props.deletePost(idPost);
    }
    render() {   

        return (
            <div>
                <li>id : {this.props.id} --  name : {this.props.name} <button onClick={()=>this.deletePost(this.props.id)}>Delete</button></li>
            </div>
            
        )
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        deletePost : (idPost)=>{
            dispatch(actions.deletePost(idPost));
        }
    }
  }
export default connect(null,mapDispatchToProps)(Task);