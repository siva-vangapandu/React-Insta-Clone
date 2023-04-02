import React from "react";
import home from "../../images/home.png";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Landing.css"


export default function LandingPage() {
    return (
        <Card className="home-content" style={{width:"18rem"}}>
            <Card.Img className="landing-img" variant="top" src={home} alt="landing-image" />
            <Card.Body className="landing-content">
                <Card.Title>10x Team 04</Card.Title>
                <Link to={"post/all"}><Button variant="primary">Enter</Button></Link>
            </Card.Body>
        </Card>

        // <div className="home-content">
        //     <div className="landing-img">
        //         <img src={home} alt="landing-image"/>

        //     </div>
        //     <div className="landing-content">
        //         <h3>10X Team 04</h3>
        //         <Link to={"post/all"}><button>Enter</button></Link>

        //     </div>

        // </div>
    )
}
