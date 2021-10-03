import axios from 'axios';

const KEY = 'AIzaSyDdAh99GqRFcR7PYo9qWf7dCw1N8kW9CsY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 8,
        key: KEY,
    }
});