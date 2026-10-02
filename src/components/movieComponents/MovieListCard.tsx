import React, {FC} from 'react';
import {IMovie} from "@/src/models/movieModels/IMovie";
import {IGenre} from "@/src/models/genreModels/IGenre";
import Link from "next/link";
import PosterPreview from "@/src/components/movieComponents/PosterPreview";
import StarsRating from "@/src/components/movieComponents/StarRating";
import MovieInfo from "@/src/components/movieComponents/MovieInfo";

interface IMovieListCardProps {
    movie: IMovie;
    genres: IGenre[];
}

const MovieListCard:FC<IMovieListCardProps> = ({movie, genres}) => {
    return (
        <div className="overflow-hidden rounded-xl bg-neutral-900 text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">

            <Link
                href={`/movies/${movie.id}`}
                className="block"
            >
                <PosterPreview
                    posterPath={movie.poster_path}
                    title={movie.title}
                />

                <div className="space-y-2 p-4">
                    <StarsRating rating={movie.vote_average}/>

                    <p className="text-sm text-neutral-400">
                        {movie.release_date}
                    </p>

                    <p className="text-sm">
                        Rating: {movie.vote_average}
                    </p>

                    <p className="text-sm text-neutral-400">
                        Votes: {movie.vote_count}
                    </p>
                </div>
            </Link>

            <div className="px-4 pb-4">
                <MovieInfo movie={movie} genres={genres}/>
            </div>

        </div>
    );
};

export default MovieListCard;