
import React, { useState } from 'react'

const FormValComp = () => {
       const [user,setUser] = useState({
        userName:"",
        userPassword:"",
        term:false
       })

       const inputChangeHandler = (event)=>{
    //    console.log(event.target.type);
    //    console.log(event.target.name);
    //    console.log(event.target.value);
    const {type,name,value} = event.target;
          setUser({...user,[name]:value})
       }
     
     const checkData = (event)=>{
        event.preventDefault();
        if(user.userName.trim()===""){
          window.alert("User Name is required");
          return false;
        }
        if(!user.userName.trim().match('^[a-zA-Z ]{3,20}$')){
          window.alert("User Name must contain only character min-3 and Max-20");
          return false;
        }
        if(user.term===false){
            window.alert("please accept term and condition");
            return false;
        }
        window.alert(JSON.stringify(user));
     }  
    return (
        <div>
            <h2>This is Form validation Component</h2>
            <form onSubmit={checkData}>
                <label>Enter User Name</label>
                <input type='text' name='userName' onChange={inputChangeHandler} value={user.userName} /> <br /> 
                {/* <label>Enter User Password</label>
                <input type='text' name='userPassword' onChange={inputChangeHandler} value={user.userPassword} /> <br />  */}
                 <label>
                <input type='checkbox' name='term' onChange={inputChangeHandler} value={user.term} />
                   I Accept Term and Condition</label><br />
                <button type='submit' className='btn btn-primary mt-2'>Submit</button>
            </form>
        </div>
    )
}

export default FormValComp
