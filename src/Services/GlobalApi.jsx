import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const apiKey = "64d59c1702b2e9ca3556bfdbb21da004"
//https://api.themoviedb.org/3/trending/all/day?api_key=64d59c1702b2e9ca3556bfdbb21da004
const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=64d59c1702b2e9ca3556bfdbb21da004'

const getTrendingVideos = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${apiKey}`)

const getMovieByGenreId = (id) => {
    return axios.get(`${movieByGenreBaseURL}&with_genres=${id}`)
}

export default {
    getTrendingVideos,
    getMovieByGenreId
}