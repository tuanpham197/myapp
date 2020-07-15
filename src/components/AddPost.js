import React, { Component } from 'react'
import * as actions from '../actions/index'
import {connect} from 'react-redux'
import {
    Form,
    Input,
    Button,
    DatePicker,
    Alert,
    message
  } from 'antd';


class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result : false
        }
    }
    handleSubmit = ()=>{
        console.log("dast");
    }
    onFinish = values => {
        this.props.AddPost(values);   
    };
    success = () => {
        message.success('Add post success');
       
    };
    render() {   
        console.log(this.props.posts.post,"as");
        return (
            <div>
                {this.props.posts.status ? this.success() : ""}
                
                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                        initialValues={{
                        size: 2,
                    }}
                
                    size={2}
                    onFinish={this.onFinish}
                >
                
                    <Form.Item 
                        label="Name"
                        name="username"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                
                    
                    <Form.Item 
                        label="Create at"
                        name="createat"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <DatePicker />
                    </Form.Item>
                    
                    <Form.Item label="Button">
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        posts : state.post
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        AddPost : (post)=>{
            dispatch(actions.addPost(post));
        },

    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(AddPost);