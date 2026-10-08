import React, {FC} from 'react';
import {getMovieById} from "@/src/services/movie.api.service";
import GenreBadge from "@/src/components/genreComponents/GenreBadge";
import Link from "next/link";

interface IMovieIDProps{
    params: Promise<{id:string}>
}

const MovieIdPage:FC<IMovieIDProps> = async ({params}) => {
    const {id} = await params;
    const movie = await getMovieById(id);
    return (
        <div className="min-h-screen bg-neutral-950 text-white">
            <div>

                <div className="relative h-[65vh] min-h-[500px] max-h-[700px] w-full overflow-hidden">

                    {movie.backdrop_path && (
                        <>
                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                alt=""
                                className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl opacity-60"
                            />

                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                alt={movie.title}
                                className="relative z-10 mx-auto h-full max-w-7xl object-contain"
                            />
                        </>
                    )}

                    <div className="absolute inset-0 z-20 bg-linear-to-t from-neutral-950 via-neutral-950/10 to-transparent"/>

                    <div className="absolute inset-0 z-20 bg-linear-to-r from-neutral-950/20 via-transparent to-neutral-950/20"/>
                </div>

                <div className="relative z-30 mx-auto -mt-40 max-w-6xl px-6 pb-16">

                    <Link
                        href="/movies"
                        className="mb-6 inline-block rounded-lg bg-neutral-800 px-4 py-2 text-sm transition hover:bg-neutral-700"
                    >
                        ← Back to movies
                    </Link>

                    <div className="flex flex-col gap-8 md:flex-row">

                        {movie.poster_path && (
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="w-72 shrink-0 rounded-2xl shadow-2xl"
                            />
                        )}

                        <div className="flex flex-col justify-end">

                            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                                {movie.title}
                            </h1>

                            <div className="mb-4 text-xl font-semibold text-yellow-400">
                                ★ {movie.vote_average.toFixed(1)}
                            </div>

                            <div className="mb-6 flex flex-wrap gap-2">
                                {movie.genres.map(genre => (
                                    <GenreBadge
                                        key={genre.id}
                                        genre={genre}
                                        clickable={false}
                                    />
                                ))}
                            </div>

                            <div className="mb-6 flex flex-wrap gap-5 text-sm text-neutral-300">

                                <p>
                                    Release date: {movie.release_date}
                                </p>

                                <p>
                                    Rating: {movie.vote_average.toFixed(1)}
                                </p>

                                <p>
                                    Votes: {movie.vote_count}
                                </p>

                                <p>
                                    Runtime: {movie.runtime} min
                                </p>

                            </div>

                            <div>
                                <h2 className="mb-2 text-xl font-semibold">
                                    Overview
                                </h2>

                                <p className="max-w-3xl leading-7 text-neutral-300">
                                    {movie.overview}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieIdPage;