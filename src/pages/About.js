import React from 'react'
import { makeStyles } from '@mui/styles'
import '../styles/aboutMe.css'

function About() {
    const styles = makeStyles((theme)=> ({
        skills:{
            width:'100%',
            display: 'inline-block',
        }
    }));
    const classes = styles()
    return (
        <div className="aboutMe">
            <h1>About me</h1>
            <div className="skills">
            <ul>
                <h1>SOFT SKILLS</h1>
                <li>Communication</li>
                <li>Willing to learn</li>
                <li>Understanding</li>
                <li>Critical Thinking</li>
                <li>Emotional Intelligence</li>
                <li>Reliable</li>
                <li>Trainable</li>
            </ul>
            </div>
            <div className="skills">
            <ul>
                <h1>TECHNICAL SKILLS</h1>
                <li>React</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>Git</li>
                <li>Node Js</li>
                <li>EJS</li>
                <li>Express JS</li>
            </ul>
            </div>
        </div>
    )
}

export default About
