import React, { Component } from 'react'

import {connect} from 'react-redux'
import Task from './Task';
import AddPost from './AddPost';

import * as actions from '../actions/index'
import {  DatePicker,Table,Layout, Menu, Breadcrumb,Card, Row } from "antd";
import style from '../index.css';


class About extends Component {
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
                        image= {e.avatar}
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
        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
            },
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: 'Image',
              dataIndex: 'image',
              key: 'image',
            },
            
          ]; 

        return (  
            <Row>
                {this.showTasks()}
            </Row>  
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
export default connect(mapStateToProps,mapDispatchToProps)(About);