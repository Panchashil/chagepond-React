import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const NavComp = () => {
 const nav = useNavigate()
  const signOut = ()=>{
    if(window.confirm("are you sure to sign out")){
          sessionStorage.clear();
          nav("/");
    }
  }
    return (
        <div>
          {/* <h2>This is  Nav Component</h2>   */}
          <Link to="myslider" className='btn btn-primary btn-sm'>MySlider</Link>{" "}
          <Link to="myimages" className='btn btn-primary btn-sm'>MyImages</Link>{" "}
          <Link to="parent" className='btn btn-primary btn-sm'>Parent</Link>{" "}
          <Link to="reacthook" className='btn btn-primary btn-sm'>Hooks</Link>{" "}
          <Link to="virtualdom" className='btn btn-primary btn-sm'>VirtualDOM</Link>{" "}
          <Link to="formval" className='btn btn-primary btn-sm'>Form</Link>{" "}
          <Link to="productdash" className='btn btn-outline-warning btn-sm'>CRUD</Link>{" "}
          {/* <Link to="/" className='btn btn-outline-warning btn-sm float-end'>Logout</Link>{" "} */}
         <button type='button' onClick={()=>signOut()} className='btn btn-outline-danger btn-sm float-end'>SignOut</button>
        </div>
    )
}

export default NavComp
