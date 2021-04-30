import axios from 'axios'
export const getFilteredMovies = async (query) => {

    let response = await axios.get(`http://www.omdbapi.com/?apikey=6b7999b9&s=${query}`)
    let data = await response.data
    return data.Search
 
}

export const getSingleMovie = async (id) => {
    let response = await axios.get(`http://www.omdbapi.com/?apikey=6b7999b9&i=${id}`)
    let data = await response.data
    return data
}
