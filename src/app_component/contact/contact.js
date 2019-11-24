import React, { Component } from 'react';
import logo from '../../assets/Logo.png'

export default class Contact extends Component {
    render() {
        return (
            <div className="card text-white mx-auto mt-5 pt-5" style={{ width: "18rem" }}>
                <div className="card-body">
                    {/* logo */}
                    <img src={logo} class="card-img-top mb-5" alt="..." />
                    {/* contact info */}
                    <div className="text-left">
                        <h6 className="card-title">Email: xxxxxxxxxxxx</h6>
                        <h6 className="card-title">Contact number: xxxxxxxxxxxx</h6>
                        <h6 className="card-title">Contact person: Eric Tong</h6>
                    </div>
                    <a href="/weather" className="btn btn-outline-light mt-5">
                        Go back
                    </a>
                </div>
            </div>

        )
    }
}
