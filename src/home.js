import React, { Fragment } from 'react';
import image from './icons8-p-button-48.png';
import { Button } from 'react-bootstrap';

export default function Home() {
    return (<Fragment>
        <div className="home">
            <img src={image} height="80" alt="" />
            <h1>Personify</h1>
            <p>Be Ambitious.To Show Your Skills.</p>
        </div>
        <div className="started">
        <Button variant="primary" size="lg">Gets Started</Button>
        </div>
    </Fragment>);
} 
