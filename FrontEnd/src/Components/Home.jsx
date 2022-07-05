import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common';
import "../Styles/index.css";
import pic from "../Images/makeup.svg";

const Home = () => {
    return (
        <>
        <Common name='Makeup Divas' 
        imgsrc={pic} visit="/services" 
        content='Its all about makeup'
        btname="Click to explore the makeup services"/>
        </>
    );
};

export default Home;

