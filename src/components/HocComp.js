import React, { Component } from 'react'

const HocComp = (WaraperComp) => {

    class Hoc extends Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        counterIncrement = ()=>{
            this.setState((prevState)=>({count:prevState.count+1}))
        }
        render(){
            return <WaraperComp count={this.state.count} counterIncrement={this.counterIncrement}></WaraperComp>
        }
    }

    return Hoc
}

export default HocComp
