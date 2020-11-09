import axios from 'axios';

const faces = axios.create({
  baseURL: 'https://uifaces.co/api',
  method: 'get',
  headers: {
      'X-API-KEY': '2DB65E46-EB264BF6-80864AE6-E7E25B18',
      'Accept': 'application/json',
      'Cache-Control': 'no-cache'
  },
});


const fetchAvatarURL = async () => {
  const response = await faces.get('', {
    params: { limit: 1 }
  });
  return response.data[0].photo;
}

export default fetchAvatarURL;
