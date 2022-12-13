import React from 'react';
import './About.css';

import grp from './grp.jpg';

function About()
{
    return(
        <div>
            <div class="body">
                <div className='dia'>
                    <img src={grp} alt="img" width="1600" height="500"/>
                </div>
                <div className='head'>
                    <h1>More about us!</h1>
                </div>
                <div class="box2"> </div>
                <div class="s3"><h1>V</h1></div>
                <div class="s4"><h1>-LEARN</h1></div>
                <div class="text"><h6>Telling the world our story</h6></div>
                <div class="head3"><h3>Behind the success</h3></div>
                <div class="text2"><p>What started out as a college project ended up being a real life interface to help
                     other college/school students as a safe space to learn 
                    and nurture their knowledge . 
                    This website was created by six wonderful individuals in their second year of college and was officially published by the start of thier third year.
                    We welcome you to the world of learning and are glad to have you.This website offers you many features and services to help you equip yourself with the knowledge you need to conqure tests and exams and pass with flying colours. 
                    The best thing about this website is that it is absolutely free of cost and very user friendly, with the only goal being to help other fellow students.
                    </p></div>
                    <div class="head3"><h3>Why choose us?</h3></div>
                    <div class="text3"><p>We as fellow students understand the pressure and anxiety that students face due to exams and V-
                        learn is here to alleviate these fears by providing this platform for students to prepare themselves and even share notes among eachother.Our goal is to make studying
                        fun and interesting again by providing various study materials such as lectures and question papers  from professionals and notes students from various parts of the world.</p>
                        <p>We hope our website satifies your needs if any queries feel free to fill the feedback form and we wish you all the best on your journey.
                            </p></div>
                     <div class="head4"><h2>"Education is not preparation for life;education is life itself"</h2></div>   
                    


        </div>
        </div>
        
    );
}


export default About;