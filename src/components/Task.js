import React, { Component } from 'react'

import {connect} from 'react-redux'
import { Card, Row, Col,Button } from "antd";
import * as actions from '../actions/index'
const { Meta } = Card;
class Task extends Component {
    constructor(props) {
        super(props);
    }
    deletePost = (idPost)=>{
        this.props.deletePost(idPost);
    }
    render() {   

        return (

            <Col span={6}>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={this.props.image} />}
                >
                    <Meta title={this.props.name} description="" />
                    <Button type="primary" danger style={{ marginTop: 10 }} onClick={()=>this.deletePost(this.props.id)}>
                        Delete
                    </Button>
                </Card>
            </Col>    
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