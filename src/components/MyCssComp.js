import React from 'react'
import staticData from '../shared/constant/constantData';
import './external.css';
import mymodulecss from './mymodulecss.module.css';

const MyCssComp = () => {
     
    const txt1Obj ={
        color:!true?"green":"red",
        fontSize:!false?"20px":"30px",
        backgroundColor:!true?"pink":"lightgray"
    }
    return (
        <> 
         {/* use of internal css  */}
            <h2 style={{color:"blue",backgroundColor:"aqua"}}>This is MyCss components</h2>
            <p style={txt1Obj}>hello all mu dear friends, i hope you all are doing well</p>
            {/* use of external css  */}
            <img className='imgProp' src={staticData.samosa} alt='samosa'/> <br/>
            {/* use of mudule css  */}
            <img className={mymodulecss.box} src={staticData.jalebi} alt='jalebi'/> <br/>

        

        </>
    )
}

export default MyCssComp
