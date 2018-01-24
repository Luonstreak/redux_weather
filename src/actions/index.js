import axios from 'axios';

const API_KEY = 'cf9cb3a4fc1485b6aac43b347cec47f3';
const  ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city}`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
};
