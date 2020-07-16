import React from 'react';
import AddPost from './components/AddPost'
import About from './components/About'
import NotFound from './components/NotFound'

const routes = [
    {
        path : '/',
        exact : true,
        main : ({match})=> <About match={match}/>
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