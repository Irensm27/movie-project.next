import React, {FC} from 'react';
import {IMovie} from "@/src/models/movieModels/IMovie";
import MovieListCard from "@/src/components/movieComponents/MovieListCard";
import {IGenre} from "@/src/models/genreModels/IGenre";

interface IMoviesProps {
    movies: IMovie[];
    genres: IGenre[];
}

const MoviesList: FC<IMoviesProps> = ({movies, genres}) => {
    if (movies.length === 0) {
        return (
            <div
                className="flex min-h-60 flex-col items-center justify-center rounded-2xl border border-purple-500/20 bg-[#171126] px-6 text-center">
                <span className="mb-4 text-5xl text-violet-400">⌕</span>

                <h2 className="mb-2 text-xl font-bold text-purple-100">
                    No movies found
                </h2>

                <p className="text-sm text-purple-200/60">
                    Try changing your search or filters.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
            {movies.map(movie => (<MovieListCard key={movie.id} movie={movie} genres={genres}/>))}
        </div>
    );
};

export default MoviesList;

