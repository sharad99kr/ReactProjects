import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID fab71d3c7dc29ca02b78a412bc9a104963b7c6d1c94ade49809a385a1f618c4c'
    }  
});
