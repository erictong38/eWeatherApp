import React, { Component } from 'react';
import { menuData } from "../../menu-data";

export default class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            isSidebarOpen: false
        };
    }

    handleMenuButtonClick = () => {
        this.setState({ isSidebarOpen: !this.state.isSidebarOpen })
    }
    render() {
        const { isSidebarOpen } = this.state;
        return (
            <>
                <div className="menu-button text-white ml-3" onClick={this.handleMenuButtonClick}>
                    <i className="fas fa-bars" />
                </div>
                <nav className={`nav ${isSidebarOpen ? 'show' : ''}`}>
                    <div
                        onClick={this.handleMenuButtonClick}
                        className="close"
                    >
                        <i className="fas fa-times" />
                    </div>
                    <ul className="menu-items text-white">
                        {menuData.map(item => (
                            <li className="menu-list" key={item.label}>
                                <a className="menu-link" href={item.url}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </>
        )
    }
}
