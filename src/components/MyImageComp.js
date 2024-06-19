import React, { Component } from 'react'
import samosa from '../shared/images/samosa-1.jfif';
import dosa from '../shared/images/dosa.jfif';

import staticData from '../shared/constant/constantData';


class MyImageComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <h2>This is MyImages Component</h2>
                <img src={samosa} alt='samosa' height="200px" width="200px"/> &nbsp;
                <img src={dosa} alt='samosa' height="200px" width="200px"/>
                < hr />
                <img src={staticData.samosa3} alt='samosa' height="200px" width="200px"/>
                <img src={staticData.jalebi} alt='samosa' height="200px" width="200px"/>
                <img src={staticData.whatsapp} alt='samosa' height="200px" width="200px"/>
                <hr />
                <video src={staticData.vdo} controls></video>
                <audio src={staticData.ado} controls></audio>

            </React.Fragment>
        )
    }
}

export default MyImageComp
