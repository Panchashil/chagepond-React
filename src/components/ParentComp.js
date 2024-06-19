import React, { Component, Fragment } from 'react'
import ChildComp from './ChildComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             empName:"Panchashil",
             empSalary:85000
        }
    }
    
    changeData = ()=>{
        this.setState((prevState)=>({empSalary:prevState.empSalary+1000,empName:"Panchashil Wankhede"}))
    }
    render() {
        return (
            <Fragment>
                <h2>This is Parent components</h2>
                <p>Employee Name is:<strong>{this.state.empName}</strong></p>
                <p>Employee Salary is:<strong>{this.state.empSalary}</strong></p>
                <button type='button' onClick={()=>this.changeData()}>Change state data</button>

                <hr />
                <ChildComp name={this.state.empName} salary={this.state.empSalary} changeData={this.changeData}></ChildComp>
            </Fragment>
        )
    }
}

export default ParentComp
