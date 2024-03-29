import React, { Component } from 'react';
import Form from './sub_components/form.component';
import Weather from "./sub_components/weather.component";
import "weather-icons/css/weather-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import Sidebar from '../sidebar/sidebar';



const API_key = "69f7770c6f35d48c7664089cba40599e"

export default class WeatherScreen extends Component {
    constructor() {
        super();
        this.state = {
            city: undefined,
            country: undefined,
            icon: undefined,
            main: undefined,
            celsius: undefined,
            temp_max: undefined,
            temp_min: undefined,
            description: "",
            error: false,
            isSidebarOpen: false
        };

        this.weatherIcon = {
            Thunderstorm: "wi-thunderstorm",
            Drizzle: "wi-sleet",
            Rain: "wi-storm-showers",
            Snow: "wi-snow",
            Atmosphere: "wi-fog",
            Clear: "wi-daysunny",
            Clouds: "wi-day-fog"
        }
    }

    calCelsius(temp) {
        let cell = Math.floor(temp - 273.15)
        return cell;
    }

    get_weathericon(icons, rangeID) {
        switch (true) {
            case rangeID >= 200 && rangeID <= 232:
                this.setState({ icon: this.weatherIcon.Thunderstorm });
                break;
            case rangeID >= 300 && rangeID <= 321:
                this.setState({ icon: this.weatherIcon.Drizzle });
                break;
            case rangeID >= 500 && rangeID <= 531:
                this.setState({ icon: this.weatherIcon.Rain });
                break;
            case rangeID >= 600 && rangeID <= 622:
                this.setState({ icon: this.weatherIcon.Snow });
                break;
            case rangeID >= 701 && rangeID <= 781:
                this.setState({ icon: this.weatherIcon.Atmosphere });
                break;
            case rangeID === 800:
                this.setState({ icon: this.weatherIcon.Clear });
                break;
            case rangeID >= 801 && rangeID <= 804:
                this.setState({ icon: this.weatherIcon.Clouds });
                break;
            default:
                this.setState({ icon: this.weatherIcon.Clouds });
        }
    }

    getWeather = async (e) => {

        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;


        if (city && country) {
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_key}`);

            const response = await api_call.json();

            console.log(response);

            this.setState({
                city: `${response.name},${response.sys.country}`,
                celsius: this.calCelsius(response.main.temp),
                temp_max: this.calCelsius(response.main.temp_max),
                temp_min: this.calCelsius(response.main.temp_min),
                description: response.weather[0].description,
                error: false

            })
            this.get_weathericon(this.weathericon, response.weather[0].id);
        } else {
            this.setState({ error: true });
        }
    };



    render() {
        return (
            <div class="row">
                <Sidebar/>
                {/* Form to get weather */}
                <Form loadweather={this.getWeather} error={this.state.error} />
                {/* Weather display */}
                <Weather
                    city={this.state.city}
                    country={this.state.country}
                    temp_celsius={this.state.celsius}
                    temp_max={this.state.temp_max}
                    temp_min={this.state.temp_min}
                    description={this.state.description}
                    weatherIcon={this.state.icon}
                />
            </div>
        )
    }
}
