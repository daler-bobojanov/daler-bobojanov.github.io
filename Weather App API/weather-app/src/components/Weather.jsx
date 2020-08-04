import React from 'react';

const Weather = props => (
    <div className="weather__info">
        {
            props.date && <p className="weather__key">Date/Time:
                 <span className="weather__value"> {props.date} </span>
            </p>
        }

        {
            props.city && props.country && <p className="weather__key">Location:
            <span className="weather__value"> {props.city}, {props.country} </span>
            </p>
        }

        {
            props.temperature && <p className="weather__key">Temperature:
                <span className="weather__value"> {props.temperature} </span>
            ℉</p>
        }

        {
            props.feels_like && <p className="weather__key">Feels Like:
                <span className="weather__value"> {props.feels_like} </span>
            ℉</p>
        }

        {
            props.humidity && <p className="weather__key">Humidity:
                <span className="weather__value"> {props.humidity} </span>
            %</p>
        }

        {
            props.description && <p className="weather__key">Conditions:
                <span className="weather__value"> {props.description}<img src={props.icon} alt=""></img> </span>
            </p>
        }

        {/* {
            props.icon && <img src={props.icon} alt=""></img>
        } */}

        {
            props.error && <p className="weather__error">{props.error}</p>
        }
    </div >
);

export default Weather;