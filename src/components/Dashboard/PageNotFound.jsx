import React from 'react'
import { Navbar } from 'react-bootstrap';
import './PageNotFound.css'
import Navigation from '../Home/Navbar';

const PageNotFound = () => {
    return (
        <div id = "error">
            <h1 id = "em">404!</h1>
            <h3 id = "mess">Sorry, we can't find that page! Please try another search.</h3>
            <Navbar/>
        </div>
    )
    }

export default PageNotFound;