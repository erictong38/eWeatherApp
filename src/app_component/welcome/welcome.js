import React, { Component } from 'react';
import logo from '../../assets/Logo.png';

export default class Welcome extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {/* Logo */}
                    <img src={logo} alt="logo" width="200" height="80" style={{ margin: "36vh 20vw" }} />
                </div>
                    {/* button start */}
                <a className="btn btn-outline-light text-center" href="/login">Start</a>
            </div>
        )
    }
}
