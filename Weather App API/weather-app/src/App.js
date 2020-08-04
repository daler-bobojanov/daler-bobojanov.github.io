import React from 'react';
import axios from 'axios';


import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

/*
Pseudocode:
* Create Wireframe;
* Create components;
* Obtain and hide API key;
* install axios;
* render components;
* Add styling;
*/

const _api_key = process.env.REACT_APP_OPENWEATHER_API_KEY;

class App extends React.Component {
    // in react v16 constructor() & super() has been depricated 
    state = {
        date: [],
        temperature: [],
        feels_like: [],
        humidity: [],
        description: [],
        icon: [],
        city: undefined,
        country: undefined,
        error: undefined
    }

    clearSearch = () => {
        window.location.reload(false);
    }

    // in react v16 use of arrow function allows to access this.object without binding it
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        // const zip_code = e.target.elements.zip_code.value;

        try {

            const api_call = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?units=imperial&q=${city},${country}&appid=${_api_key}`);

            // console.log(api_call.data.list);

            const dateList = api_call.data.list.map((date) => [date.dt_txt]);
            // * Attempt to convert time to normal readable format. *
            /*
            const dateList = api_call.data.list.map((date) => [date.dt]);
            const newDateList = dateList.map((newDate) => new Date(newDate * 1000));
            console.log(dateList, 'NEW DATE');
           */
            const tempList = api_call.data.list.map((temp) => [temp.main.temp]);
            const feelsLikeList = api_call.data.list.map((feelsLike) => [feelsLike.main.feels_like]);
            const humidityList = api_call.data.list.map((humidity) => [humidity.main.humidity]);
            const descriptionList = api_call.data.list.map((description) => [description.weather[0].description]);
            const iconList = api_call.data.list.map((icon) => [icon.weather[0].icon]);

            this.setState({
                date: dateList,
                temperature: tempList,
                feels_like: feelsLikeList,
                humidity: humidityList,
                description: descriptionList,
                icon: iconList,
                city: api_call.data.city.name,
                country: api_call.data.city.country,
                error: ""
            });

            // console.log(this.state.date, 'Date');
            // console.log(this.state.temperature, 'Termperature');
            // console.log(this.state.feels_like, 'Feels Like');
            // console.log(this.state.humidity, 'Humidity');
            // console.log(this.state.description, 'Description');
            // console.log(this.state.icon, 'Icon');
            // console.log(this.state.city, 'City');
            // console.log(this.state.country, 'Country');

        } catch (e) {
            console.error(e);
            this.setState({
                date: [],
                temperature: [],
                feels_like: [],
                humidity: [],
                description: [],
                icon: [],
                city: undefined,
                country: undefined,
                error: "City/Zip Code and Country search values must be entered. Alternatively, check for any typos.."
            });
        }
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xs-4 title-container">
                                    <Titles />
                                </div>
                                <div className="col-xs-8 form-container">
                                    <Form getWeather={this.getWeather} clearSearch={this.clearSearch} />
                                    <Weather
                                        date={this.state.date[0]}
                                        temperature={this.state.temperature[0]}
                                        feels_like={this.state.feels_like[0]}
                                        humidity={this.state.humidity[0]}
                                        description={this.state.description[0]}
                                        icon={`http://openweathermap.org/img/wn/${this.state.icon[0]}@2x.png`}
                                        city={this.state.city}
                                        country={this.state.country}
                                        error={this.state.error}

                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;

