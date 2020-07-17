import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class TaskDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            name : '',
            avatar : '',
            slug : ''
        }
    }
    componentDidMount(){
        var {match} = this.props;
        var posts = this.props.posts.post;
        var post = posts.find(e=>e.id === match.params.id);
        if(post){
            this.setState({
                id : post.id,
                name : post.name,
                avatar : post.avatar,
                slug : post.slug,
            })
        }
    }

    render() {
        var {id,name,avatar,slug} = this.state;
        return (
            <div>
                <img src={avatar} />
               <h1> Name:  {name}</h1> 
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        posts : state.post
    }
}

export default connect(mapStateToProps,null)(TaskDetail);