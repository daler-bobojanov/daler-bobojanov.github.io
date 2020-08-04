import React from 'react';

const Form = props => (
    <React.Fragment>
        <form onSubmit={props.getWeather} id="weather-form">
            <input type="text" name="city" placeholder="City or Zip Code..." />
            <input type="text" name="country" placeholder="Country..." />
            <button id="get-weather">Get Weather</button>
            <button onClick={props.clearSearch}>Clear Search</button>
        </form>
    </React.Fragment>
);

export default Form;