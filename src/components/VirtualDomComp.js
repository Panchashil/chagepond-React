
import React, { Component } from 'react'

 class VirtualDomComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             breakFast:[{id:1,name:"Poha"},{id:2,name:"Dosa"},{id:3,name:"Idali"},{id:4,name:"Upama"}]
        }
        setTimeout(()=>{
            let breakFastArray = this.state.breakFast;
            let itemIndex = this.state.breakFast.findIndex((val)=>val.id===3);
            let item = this.state.breakFast.find((val)=>val.id ===3);
            if(item){
               breakFastArray.splice(itemIndex,1,{name:"vada sambar"});
               this.setState(breakFastArray);
            }   
        },3000)
    }
    
    render() {
        return (
            <div>
                <h2>This is VirtualDOm Component</h2>
                <ul>
                    {this.state.breakFast.map((val,index)=>{
                        // return <li key={val.id}>{val.name}</li>
                        return <li key={index}>{val.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default VirtualDomComp
