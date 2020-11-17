import axios from 'axios'

const URL='https://api.themoviedb.org/3'
const API_KEY = 'c16aa8e7e853a9a35b10d6517f91fd80';


const requests = {

    fetchTrending: function(){
        return axios.get(URL+'/trending/movie/day?api_key='+API_KEY+'&language=en-US')
    },

    fetchNetflixOriginals: function(){
        return axios.get(URL+'/discover/tv?api_key='+API_KEY+'&with_networks=213')
    },

    fetchTopRated: function(){
        return axios.get(URL+'/movie/top_rated?api_key='+API_KEY+'&language=en-US')
    },

    fetchActionMovies: function(){
        return axios.get(URL+'/discover/movie?api_key='+API_KEY+'&with_genres=28')
    },

    fetchComedyMovies: function(){
        return axios.get(URL+'/discover/movie?api_key='+API_KEY+'&with_genres=35')
    },

    fetchHorrorMovies: function(){
        return axios.get(URL+'/discover/movie?api_key='+API_KEY+'&with_genres=27')
    },

    fetchRomanceMovies: function(){
        return axios.get(URL+'/discover/movie?api_key='+API_KEY+'&with_genres=10749')
    },

    fetchDocumentaries: function(){
        return axios.get(URL+'/discover/movie?api_key='+API_KEY+'&with_genres=99')
    },
}

export default requests;
