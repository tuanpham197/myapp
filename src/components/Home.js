import React, { Component } from 'react'

import {connect} from 'react-redux'


class Home extends Component {
    
    render() {  
        

        return (
           <h1>day la trang home</h1>
        )
    }
}

export default connect(null,null)(Home);