import React, { Component } from 'react'

class SetStateComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            count:0,
            name:"Panchashil"
        }
    }
    
    counterInc = ()=>{
        // this.setState({count:this.state.count+1});
        this.setState((prevState)=>({count:prevState.count+1,name:"Panchashil Wankhede"}))
    }
    render() {
        return (
            <div>
            <h2>This is SetStateComponent Component</h2> 
            <p>My Name is : <strong>{this.state.name}</strong></p> 
            <p>Count value is : <strong>{this.state.count}</strong></p> 
            <button type='button' onClick={()=>this.counterInc()}>Count ++</button>  
            </div>
        )
    }
}

export default SetStateComp
