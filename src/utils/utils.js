const API_URL = 'http://www.omdbapi.com?apikey=b02986ff';

const moveScreenToTop = () => {
    window.scrollTo({
        top: 0,
    });
}

export { API_URL, moveScreenToTop };