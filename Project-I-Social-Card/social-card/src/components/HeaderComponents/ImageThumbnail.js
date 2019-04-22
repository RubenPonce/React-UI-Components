import React from 'react';
import './Header.css';
import logo from './lambda-logo.jpg'
const ImageThumbnail = ()=>{
    return (
        <img className="thumbnail" src={logo} alt="lambda school crest"></img>
    )
}

export default ImageThumbnail;