import React from 'react'
import pic from "../Images/makeup.svg";
import Common from './Common';
const About = () => {
    return (
        <>
        <Common name='About Us' 
        imgsrc={pic} visit="/contact" 
        content='Finding affordable, cruelty-free makeup  and skin care  that is high-quality can be a challenge. This is why we created MISSROSE.

        Along being affordable, we try to provide the latest products, so you can stay on trend without needing to spend a lot of money'
        btname="Contact Now"/>
        </>
    );
};

export default About;