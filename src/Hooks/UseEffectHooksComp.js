import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'

const UseEffectHooksComp = () => {
    const [count,setCount] = useState(0);
  const [salary,setSalary] = useState(95000);
  
    //   case1: when no dependecy value pass 
    // useEffect(()=>{
    //     // setCount(count+1)
    // })

    // case2: when pass dependancy laue as blank array 
    // useEffect(()=>{
    //     setCount(count+1)
    // },[])

    // case3: when we pass dependency value as state or props 
    useEffect(()=>{
        setCount(count+1)
    },[salary])
    return (
        <div>
            <h2>This is UseEffect Hooks Component</h2>
            <p>Counter value is : <strong>{count}</strong></p>
            <p>Salary is : <strong>{salary}</strong></p>
            <Button onClick={()=>setSalary(salary+1000)} variant='outlined' color='success'>Increment Salary</Button>
        </div>
    )
}

export default UseEffectHooksComp
