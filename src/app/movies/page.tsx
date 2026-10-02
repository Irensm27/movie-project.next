import React from 'react';
import {getAllMovies, getGenres} from "@/src/services/movie.api.service";
import MoviesList from "@/src/components/movieComponents/MoviesList";

const MoviesPage = async () => {
    const movies = await getAllMovies();
    const genres = await getGenres();
    return (
        <div>
            <MoviesList movies={movies.results} genres={genres.genres}/>
        </div>
    );
};

export default MoviesPage;