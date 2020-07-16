import React, { Component } from 'react'

import {connect} from 'react-redux'
import Task from './Task';


import * as actions from '../actions/index'
import {   Row ,Pagination} from "antd";

import ReactLoading from 'react-loading';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task : {
                id : '',
                name : ''
            },
            numberPage :{
                start: 0,
                end : 8
            },
        }
    }
    handleChangePage = value => {
        console.log(value);
        if (value <= 1) {
          this.setState({
            numberPage :{
                start: 0,
                end : 8
            }
          });
        } else {
          this.setState({
            numberPage :{
                start: (value-1)*8,
                end : value * 8
            }
          });
        }
      };
    showTasks = ()=>{    
        console.log("showTasks");
        return this.props.posts.slice(this.state.numberPage.start,this.state.numberPage.end).map((e)=>{
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
        var {match} = this.props;
        console.log(match,"Asdasd");
        return ( 
            <div>
                <Row>
                    {this.showTasks()}
                </Row> 
                <Pagination
                    defaultCurrent={1}
                    defaultPageSize={8}
                    onChange={this.handleChangePage}
                    total={this.props.posts.length}
                />
            </div> 
             
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        tasks : state.task,
        posts : state.post.post
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        addTask : (task)=>{
            dispatch(actions.addTask(task));
        },
        getPost : ()=>{
            dispatch(actions.getPost());
        }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(About);