import React, { FC } from 'react';
import { getMovieById } from "@/src/services/movie.api.service";
import GenreBadge from "@/src/components/genreComponents/GenreBadge";
import Link from "next/link";

interface IMovieIDProps {
    params: Promise<{ id: string }>;
}

const MovieIdPage: FC<IMovieIDProps> = async ({ params }) => {
    const { id } = await params;
    const movie = await getMovieById(id);

    return (
        <div className="min-h-screen bg-[#0B0914] text-white">

            <div className="relative h-[55vh] min-h-[400px] max-h-[650px] w-full overflow-hidden bg-[#171126]">

                {movie.backdrop_path && (
                    <>
                        <img
                                                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-2xl"
                        />


                <img
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.title}
                    className="relative z-10 mx-auto h-full w-full object-cover object-center"
                />
                </>
                )}


        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0B0914] via-[#0B0914]/30 to-[#0B0914]/10" />

        <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#0B0914]/50 via-transparent to-[#0B0914]/30" />


        <div className="absolute bottom-0 left-1/4 z-20 h-40 w-80 rounded-full bg-purple-600/10 blur-3xl" />
        </div>


        <main className="relative z-30 mx-auto -mt-36 max-w-6xl px-5 pb-20 sm:px-8">
            {/* Кнопка повернення */}
    <Link
        href="/movies"
        className="mb-8 inline-flex items-center gap-2 rounded-xl border border-purple-500/20 bg-[#171126]/90 px-5 py-3 text-sm font-medium text-purple-200 shadow-lg backdrop-blur-md transition hover:border-violet-400/50 hover:bg-[#211735] hover:text-white"
    >
        <span className="text-lg">←</span>
        Back to movies
    </Link>

    <div className="flex flex-col gap-8 md:flex-row md:items-start">


        <div className="w-full shrink-0 md:w-72 lg:w-80">
            {movie.poster_path ? (
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="mx-auto w-full max-w-xs rounded-2xl border border-purple-400/20 shadow-2xl shadow-purple-950/40 md:max-w-none"
                />
            ) : (
                <div className="flex aspect-[2/3] w-full max-w-xs flex-col items-center justify-center gap-3 rounded-2xl border border-purple-500/20 bg-[#171126] text-purple-200/60 md:max-w-none">
                    <span className="text-5xl">🎬</span>
                    <span>No poster available</span>
                </div>
            )}
        </div>


        <div className="flex min-w-0 flex-1 flex-col">


            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
                Movie details
            </p>

            <h1 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {movie.title}
            </h1>


            <div className="mb-6 flex flex-wrap items-center gap-4">

                <div className="flex items-center gap-2 rounded-xl border border-violet-400/20 bg-violet-500/10 px-4 py-3">
                                <span className="text-2xl text-violet-300">
                                    ★
                                </span>

                    <div>
                        <p className="text-lg font-bold text-white">
                            {movie.vote_average.toFixed(1)}
                            <span className="text-sm font-normal text-purple-200/50">
                                            /10
                                        </span>
                        </p>

                        <p className="text-xs text-purple-200/60">
                            TMDB rating
                        </p>
                    </div>
                </div>

                <div className="text-sm text-purple-200/60">
                    {movie.vote_count.toLocaleString()} votes
                </div>
            </div>


            <div className="mb-7">
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-purple-200/60">
                    Genres
                </h2>

                <div className="flex flex-wrap gap-2">
                    {movie.genres.map(genre => (
                        <GenreBadge
                            key={genre.id}
                            genre={genre}
                            clickable={false}
                        />
                    ))}
                </div>
            </div>


            <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3">

                <div className="rounded-xl border border-purple-500/15 bg-[#171126] p-4">
                    <p className="mb-2 text-xs text-purple-200/50">
                        Release date
                    </p>

                    <p className="font-semibold text-purple-100">
                        {movie.release_date || 'Unknown'}
                    </p>
                </div>

                <div className="rounded-xl border border-purple-500/15 bg-[#171126] p-4">
                    <p className="mb-2 text-xs text-purple-200/50">
                        Runtime
                    </p>

                    <p className="font-semibold text-purple-100">
                        {movie.runtime
                            ? `${movie.runtime} min`
                            : 'Unknown'}
                    </p>
                </div>

                <div className="col-span-2 rounded-xl border border-purple-500/15 bg-[#171126] p-4 sm:col-span-1">
                    <p className="mb-2 text-xs text-purple-200/50">
                        User votes
                    </p>

                    <p className="font-semibold text-purple-100">
                        {movie.vote_count.toLocaleString()}
                    </p>
                </div>
            </div>

            <div className="rounded-2xl border border-purple-500/15 bg-gradient-to-br from-[#171126] to-[#110D1C] p-5 sm:p-6">
                <h2 className="mb-4 flex items-center gap-3 text-xl font-bold text-white">
                    <span className="h-6 w-1 rounded-full bg-violet-500" />
                    Overview
                </h2>

                <p className="max-w-3xl text-sm leading-7 text-purple-100/70 sm:text-base">
                    {movie.overview || 'No description available.'}
                </p>
            </div>

                </div>
            </div>
        </main>
        </div>
        );
        };

export default MovieIdPage;

