import React, { Component } from 'react'

import {connect} from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';

class Demo extends Component {

   
    render() {   

        return (
            <Router>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                    </ul>
                    {/* noi dung */}
                    <Route path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                </div>
            </Router>
            
        )
    }
}


export default connect(null,null)(Demo);