import React, { Component } from "react";

class ClassComp extends Component{
    
    constructor(){
        super();
        this.state={
            company:"Changepond",
            salary:85000
        }
    }
    render(){
        const {company,salary} = this.state; //destructuring of state
        const {myName,post} = this.props; //destructuring of props
        
        return <div>
            <h2>This is Class Component</h2>
            {/* accessing props data  */}
            {/* <p>My ane is :{this.props.myName}, I am :{this.props.post}</p> */}
            <p>My ane is :{myName}, I am :{post}</p>

             {/* accessing state data  */}
            {/* <p>Comapny Name is : {this.state.company}, my salary is :{this.state.salary}</p> */}
            <p>Comapny Name is : {company}, my salary is :{salary}</p>
        </div>
    }
}

export default ClassComp;