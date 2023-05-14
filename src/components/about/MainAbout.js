import React from "react";
import './main-about.css';

class MainAbout extends React.Component{
    render() {
        return (
            <div className="main-about">
                <div className="content-about">
                    <h2>Hello! &#x1f64c; </h2>
                    <h3>I am Fernando Tuyo &#x1f680;</h3>
                    <p>A passionate about software developer having an experience of building and support web applications with PHP | Laravel | Javascript | React Js | MySQL and other libraries and frameworks working based methodologies agile. </p>
                    <p>My motivation is to make the work of others easier with a little bit of code. </p>
                    <div className="social-networks">
                        <p className="info-text">Contact me</p>
                        <a href="https://www.linkedin.com/in/fernandotuyodev/"><img alt="Linkedin" src="/linkedin.svg" width="20px" /></a>
                        <a href="https://github.com/836Atomizer"><img alt="Github" src="/square-github.svg" width="20px" /></a>
                        <a href ="mailto:jesus.tuyobernal987@gmail.com" title="jesus.tuyobernal987@gmail.com"><img alt="Gmail" src="/square-envelope-solid.svg" width="20px" /></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainAbout;