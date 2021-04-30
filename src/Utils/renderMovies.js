import Loader from "../Components/Loader/Loader"
import MovieCard from "../Components/MovieCard/SingleMovie"
import React from 'react'

export const renderMovies = (isLoading, list) => {
    if (isLoading === true) {
        return <Loader />
    }
    if (list.length > 0) {

        return list.map(movie => {

            return <MovieCard key={movie.movieID} title={movie.title} img={movie.poster} movieID={movie.movieID} />

        })
    } else {
        return <p>No movies in this list yet!</p>
    }
}