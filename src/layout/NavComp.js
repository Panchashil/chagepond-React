import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
    return (
        <div>
          {/* <h2>This is  Nav Component</h2>   */}
          <Link to="myslider" className='btn btn-primary btn-sm'>MySlider</Link>{" "}
          <Link to="myimages" className='btn btn-primary btn-sm'>MyImages</Link>{" "}
          <Link to="parent" className='btn btn-primary btn-sm'>Parent</Link>{" "}
          <Link to="reacthook" className='btn btn-primary btn-sm'>Hooks</Link>{" "}
          <Link to="virtualdom" className='btn btn-primary btn-sm'>VirtualDOM</Link>{" "}
          <Link to="formval" className='btn btn-primary btn-sm'>Form</Link>{" "}
        </div>
    )
}

export default NavComp
