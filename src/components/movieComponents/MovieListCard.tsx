import React, { FC } from 'react';
import { IMovie } from "@/src/models/movieModels/IMovie";
import { IGenre } from "@/src/models/genreModels/IGenre";
import Link from "next/link";
import PosterPreview from "@/src/components/movieComponents/PosterPreview";
import StarsRating from "@/src/components/movieComponents/StarsRating";
import MovieInfo from "@/src/components/movieComponents/MovieInfo";

interface IMovieListCardProps {
    movie: IMovie;
    genres: IGenre[];
}

const MovieListCard: FC<IMovieListCardProps> = ({ movie, genres }) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-purple-500/15 bg-[#171126] text-white shadow-lg shadow-purple-950/10 transition-all duration-300 hover:-translate-y-2 hover:border-violet-400/40 hover:shadow-xl hover:shadow-purple-900/30">

            <Link
                href={`/movies/${movie.id}`}
                className="block"
            >
                <div className="overflow-hidden">
                    <div className="transition-transform duration-500 group-hover:scale-[1.03]">
                        <PosterPreview
                            posterPath={movie.poster_path}
                            title={movie.title}
                        />
                    </div>
                </div>

                <div className="space-y-3 p-4">

                    <StarsRating rating={movie.vote_average} />

                    <div className="flex items-center justify-between gap-2">
                        <p className="text-sm text-purple-300/70">
                            {movie.release_date
                                ? movie.release_date.slice(0, 4)
                                : 'Release date unknown'}
                        </p>

                        <span className="rounded-lg border border-violet-400/20 bg-violet-500/10 px-2 py-1 text-xs font-semibold text-violet-200">
                            ★ {movie.vote_average.toFixed(1)}
                        </span>
                    </div>

                    <p className="text-xs text-purple-200/50">
                        {movie.vote_count.toLocaleString()} votes
                    </p>
                </div>
            </Link>

            <div className="border-t border-purple-500/10 px-4 pb-5 pt-4">
                <MovieInfo
                    movie={movie}
                    genres={genres}
                />
            </div>

        </div>
    );
};

export default MovieListCard;

