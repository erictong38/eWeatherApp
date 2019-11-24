import React, { Component } from 'react';
import "./login.style.css";

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: ''
        }
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        const userName = this.state.userName
        const password = this.state.password
        // ============ LOGIN CREDENTIALS =============
        if (userName === 'erict38' && password === 'admin') {
            this.props.history.push('/weather')
        }
        // ============================================
    }

    render() {
        return (
            <div className="container">
                {/* login form */}
                <form className="text-white pt-5" onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="userName"
                            name="userName"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            onChange={this.handleOnChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.handleOnChange}
                        />
                    </div>
                    <button type="button" className="btn btn-outline-light" onClick={this.handleOnSubmit}>
                        Submit
                </button>
                </form>
            </div>
        )
    }
}
