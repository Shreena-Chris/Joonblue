import { textAlign } from '@mui/system';
import React from 'react';
import './About.css';
import grp from './grp.jpg';

function About()
{
    return(
        <div>
            <div class="body">
                <div className='dia'>
                    <img src={grp} alt="img" width="1250" height="500"/>
                </div>
                <div className='head'>
                    <h1> Welcome!</h1>
                </div>


        </div>
        </div>
        
    );
}


export default About;