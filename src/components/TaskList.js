import React, { Component } from 'react'

import {connect} from 'react-redux'
import Task from './Task';
import * as actions from '../actions/index'
import {  DatePicker } from "antd";

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task : {
                id : '',
                name : ''
            }
        }
    }
    showTasks = ()=>{    

        return this.props.posts.map((e)=>{
            return <Task
                        id = {e.id}
                        name= {e.name}
                        key = {e.id}
                    >

                </Task>
        })
    }
    handleChange = (event)=>{
        var arrId = this.props.tasks.map(e=>{
            return e.id;
        })
        this.setState({
            task: {
                id : Math.max(...arrId) +1,
                name : event.target.value
            }
        });
    }
    handleSubmit = ()=>{
        
        event.preventDefault();
        this.props.addTask(this.state.task);
    }
    render() {   
        return (
            <div >
               <div>
                   <form onSubmit={this.handleSubmit}>
                       <input type="text" placeholder="Nhập task" name="nametask" onChange={this.handleChange} />
                       <input type="submit" value="add"/>
                   </form>
                   <div>
                        <DatePicker />
                        {this.showTasks()}
                   </div>
               </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        tasks : state.task,
        posts : state.post
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        addTask : (task)=>{
            dispatch(actions.addTask(task));
        },
        getAllTask : ()=>{
            dispatch(actions.getAllTask());
        }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(TaskList);