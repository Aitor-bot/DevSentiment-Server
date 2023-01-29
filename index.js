require('dotenv').config(); 
const axios = require('axios');

const baseURL = 'https://api.twitter.com/2/tweets/search/recent';

const headers = {
  'Authorization': `Bearer ${process.env.BEARER_TOKEN}`,
  'Content-Type': 'application/json'
};

const query = {
  "query": "javascript lang:en",
  "max_results": "100",
  "start_time": (new Date(Date.now() - 24*60*60*1000)).toISOString()
  
  
};

let counter = 0;

const getResults = async (next_token) => {
  if (next_token) {
    query.next_token = next_token;
  }

  const response = await axios.get(baseURL, {headers, params: query});
  counter += response.data.data.length;
  console.log(`Received ${counter} tweets`);

  //response.data.data.forEach(tweet => console.log(`"${tweet.text}"`));

  if (response.data.meta.next_token) {
    getResults(response.data.meta.next_token);
  }
};

getResults();