import React, { Component } from 'react';
import HocComp from './HocComp';
import { Button } from '@mui/material';

class ClickCounterComp extends Component {
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
                <h2>This is ClickCounter Component</h2>
                {/* <p>Counter value is : <strong>{this.state.count}</strong></p>
                <button type='button' onClick={()=>this.counterIncrement()}>Counter ++</button> */}
                
                <p className='text-primary'>Counter value is : <strong>{this.props.count}</strong></p>
                {/* <button type='button' className='btn btn-primary' onClick={()=>this.props.counterIncrement()}>Counter ++</button> */}
               <Button variant='contained'  onClick={()=>this.props.counterIncrement()}> Counter ++</Button>
            </div>
        )
    }
}

// export default  ClickCounterComp
export default  HocComp(ClickCounterComp) 
