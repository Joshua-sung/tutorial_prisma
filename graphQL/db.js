let movies = [
    {
    id:0,
    name: "Jooho",
    score: 1,
    },
    {
    id:1,
    name: "SAKURA",
    score: 3,
    },
    {
    id:2,
    name: "momo",
    score: 20,
    },
    {
    id:3,
    name: "isabel",
    score: 21,
    },
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0];
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movie = cleanedMovies;
        return true
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: '${movies.length + 1}',
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};

import fetch from "node-fetch";
const API_URL = "https://yts.mx/api/v2/list_movies.json";

// export const getTitles = (limit,rating) => 
//     fetch('${API_URL}')
//     .then(res => res.json())
//     .then(json => json.data.titles);
export const getTitles = (limit,rating) => {
    let REQUEST_URL = API_URL;
    if (limit > 0) {
        REQUEST_URL += 'limit=${limit}';
    }
    if (rating>0) {
        REQUEST_URL += 'minimum_rating = ${rating}';
    }
    return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.titles);
}