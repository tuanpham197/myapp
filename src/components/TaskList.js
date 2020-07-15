import React, { Component } from 'react'

import {connect} from 'react-redux'
import AddPost from './AddPost';

import * as actions from '../actions/index'
import {  Layout, Menu, Card ,Pagination} from "antd";

import Example from './Loading';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { UserOutlined } from '@ant-design/icons';
import About from './About';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

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
    componentDidMount(){
        this.props.getPost();
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
        console.log(this.state);
        return (
            <Router>
                <Layout>
                    <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="2">About</Menu.Item>
                        <Menu.Item key="3">Link</Menu.Item>
                    </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                        >
                            <SubMenu key="sub1" icon={<UserOutlined />} title="Options">
                                <Menu.Item key="1">
                                    <Link to="/">List </Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/add">Add new</Link>
                                </Menu.Item>
                                
                            </SubMenu>
                            
                        </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        {this.props.posts.loading ? <Example /> : <Switch>
                            <Route path="/add" component={AddPost} />
                            <Route path="/" component={About} />
                               
                        </Switch>}
                        {/* <Pagination
                            defaultCurrent={1}
                            defaultPageSize={8}
                            onChange={this.handleChangePage}
                            total={15}
                        /> */}
                            
                        </Content>
                    </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>

                    
                </Layout>
            </Router>
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
        },
        getPost : ()=>{
            dispatch(actions.getPost());
        }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(TaskList);