import { Button } from '@mui/material';
import React, { useState } from 'react';

const UseStateHookComp = () => {
   const [count,setCount]    = useState(0);
   const [name,setName] = useState("Panchashil");
   
   const counterInc = ()=>{
    setCount(count+1);
   }
    return (
        <div>
            <h2>This is UseState Hooks Component</h2>
            <p>Counte Value is :{count}</p>
            <Button variant='contained' onClick={()=>counterInc()}>Counter ++</Button>{" "}
            <Button variant='contained' onClick={()=>setCount(count+1)}>Counter ++</Button>
            <hr />
            <p>My Name is :{name}</p>
            <Button variant='contained' onClick={()=>setName("Panchashil Wankhede")}>Change Name</Button>
        </div>
    )
}

export default UseStateHookComp
