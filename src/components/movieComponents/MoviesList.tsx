import React, { FC } from 'react';
import { IMovie } from "@/src/models/movieModels/IMovie";
import MovieListCard from "@/src/components/movieComponents/MovieListCard";
import { IGenre } from "@/src/models/genreModels/IGenre";

interface IMoviesProps {
    movies: IMovie[];
    genres: IGenre[];
}

const MoviesList: FC<IMoviesProps> = ({ movies, genres }) => {
    return (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {movies.map(movie => (
                <MovieListCard
                    key={movie.id}
                    movie={movie}
                    genres={genres}
                />
            ))}
        </div>
    );
};

export default MoviesList;