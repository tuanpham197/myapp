import React, { Component } from 'react'
import * as actions from '../actions/index'
import {connect} from 'react-redux'
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
  } from 'antd';


class AddPost extends Component {
    constructor(props) {
        super(props);
    }
    handleSubmit = ()=>{
        console.log("dast");
    }
    onFinish = values => {
        this.props.AddPost(values);

    };
    render() {   

        return (
            
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
        )
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        AddPost : (post)=>{
            dispatch(actions.addPost(post));
        },
    }
  }
export default connect(null,mapDispatchToProps)(AddPost);