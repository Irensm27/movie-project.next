import React, {FC} from 'react';
import {IMovie} from "@/src/models/movieModels/IMovie";
import MovieListCard from "@/src/components/movieComponents/MovieListCard";
import {IGenre} from "@/src/models/genreModels/IGenre";

interface IMoviesProps {
    movies: IMovie[];
    genres: IGenre[];
}
const MoviesList:FC<IMoviesProps> = ({movies, genres }) => {
    return (
        <div>
            {movies.map(movie => (<MovieListCard key={movie.id} movie={movie} genres={genres} />))}
        </div>
    );
};

export default MoviesList;