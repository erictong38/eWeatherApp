import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div className="container mt-1 text-white text-center p-3">
                <h3 className="mt-2">About us</h3>
                {/* dummy text about eWeather */}
                <p className="lead mt-5">
                    eWeather is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <a href="/weather" className="btn btn-outline-light">Go back</a>
            </div>
        )
    }
}
