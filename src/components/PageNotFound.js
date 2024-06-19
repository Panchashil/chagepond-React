import React from 'react'
import staticData from '../shared/constant/constantData';

const PageNotFound = () => {
    return (
        <div>
            <h1 style={{color:"red",textAlign:"center"}}>404................Page not Found</h1>
            <p style={{color:"green",textAlign:"center"}}>try another routing...</p>
            <img  src={staticData.pagenotfound} alt='page not found' />
        </div>
    )
}

export default PageNotFound
