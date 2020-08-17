import http from './httpService';

function searchResults(bookName) {
    return http.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`);
}

function dbSearchResults(bookName) {
    return http.get(`http://localhost:3001/api/users/${bookName}`);
}

export { searchResults, dbSearchResults };
