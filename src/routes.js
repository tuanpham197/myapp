import React from 'react';
import AddPost from './components/AddPost'
import About from './components/About'
import NotFound from './components/NotFound'
import Home from './components/Home';
import Task from './components/Task';
import TaskDetail from './components/TaskDetail';

const routes = [
    {
        path : '/',
        exact : true,
        main : ()=> <Home />
    },
    {
        path : '/post',
        exact : true,
        main : ({match})=> <About match={match}/>
    },
    {
        path : '/post/:id',
        exact : false,
        main : ({match})=> <TaskDetail match={match}/>
    },
    {
        path : '/add',
        exact : false,
        main : ()=> <AddPost />
    },
    {
        path : '',
        exact : false,
        main : ()=> <NotFound />
    },
    {

    }
]
export default routes;