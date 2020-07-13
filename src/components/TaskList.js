import React, { Component } from 'react'

import {connect} from 'react-redux'
import Task from './Task';
import * as actions from '../actions/index'


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
        console.log(this.props.tasks,"task");    
        return this.props.tasks.map((e)=>{
            return <Task
                        id = {e.id}
                        name= {e.name}
                        key = {e.id}
                    >

                </Task>
        })
    }
    handleChange = (event)=>{
        this.setState({
            task: {
                id : this.props.tasks.length+1,
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
            <div>
               <div>
                   <form onSubmit={this.handleSubmit}>
                       <input type="text" placeholder="Nhập task" name="nametask" onChange={this.handleChange} />
                       <input type="submit" value="add"/>
                   </form>
                   <div>
                        {this.showTasks()}
                   </div>
               </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        tasks : state.task
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        addTask : (task)=>{
            dispatch(actions.addTask(task));
        }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(TaskList);