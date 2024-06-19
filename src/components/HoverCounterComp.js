import React, { Component } from 'react'
import HocComp from './HocComp';

class HoverCounterComp extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }
    // counterIncrement = ()=>{
    //     this.setState((prevState)=>({count:prevState.count+1}))
    // }
    render() {
        return (
            <div>
                <h2>This is Hover Counter Component</h2>
                {/* <p>Counter value is : <strong>{this.state.count}</strong></p>
                <h2 onMouseOver={()=>this.counterIncrement()}>Hover on me to increment counter</h2> */}
                <p>Counter value is : <strong>{this.props.count}</strong></p>
                <h2 onMouseOver={()=>this.props.counterIncrement()}>Hover on me to increment counter</h2>
            </div>
        )
    }
}

// export default HoverCounterComp
export default HocComp(HoverCounterComp) 
