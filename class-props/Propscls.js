import React, { Component } from 'react'
const heading={
    fontSize:'30px',
    color:'red'
}
class Propscls extends Component {
    
    render() {
        return (
            <div>
               <h1 style={heading}>hello {this.props.name}</h1> 
            </div>
        )
    }
}

export default Propscls
