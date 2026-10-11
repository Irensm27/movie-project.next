'use client';

import {useEffect, useState} from 'react';
import Link from 'next/link';
import {IMovie} from '@/src/models/movieModels/IMovie';

interface IMovieBannerProps {
    movies: IMovie[];
}

const MovieBanner = ({movies}: IMovieBannerProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (movies.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % movies.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [movies.length]);

    if (movies.length === 0) return null;

    const movie = movies[currentIndex];

    const handlePrevious = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? movies.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % movies.length);
    };

    return (
        <section className="relative mx-auto w-full max-w-7xl px-4 py-6 sm:px-6">
            <div
                className="group relative h-[420px] overflow-hidden rounded-3xl border border-purple-500/20 bg-[#171126] shadow-2xl shadow-purple-950/30 sm:h-[480px] lg:h-[520px]">

                {movie.backdrop_path && (
                    <img
                        key={movie.backdrop_path}
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt={movie.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"/>)}

                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0914] via-[#0B0914]/85 to-[#0B0914]/10"/>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0914] via-transparent to-[#0B0914]/20"/>

                <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl"/>

                <div
                    className="relative z-10 flex h-full max-w-3xl flex-col justify-center px-8 pb-16 pt-8 text-white sm:px-12 lg:px-16">

                    <div
                        className="mb-5 flex w-fit items-center gap-2 rounded-full border border-violet-400/30 bg-purple-950/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200 backdrop-blur-md">
                        <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_10px_#A78BFA]"/>
                        Featured movie
                    </div>

                    <h1
                        key={movie.id}
                        className="mb-5 line-clamp-2 text-3xl font-extrabold leading-tight tracking-tight drop-shadow-lg sm:text-4xl lg:text-6xl">
                        {movie.title}
                    </h1>

                    <p className="mb-7 line-clamp-3 max-w-xl text-sm leading-7 text-purple-100/80 sm:text-base">
                        {movie.overview || 'Discover this movie and explore its story.'}</p>

                    <div className="mb-7 flex flex-wrap items-center gap-4 text-sm text-purple-100/80">
                        <span className="flex items-center gap-2">
                            <span className="text-lg text-violet-300">★</span>
                            {movie.vote_average?.toFixed(1) ?? 'N/A'}
                        </span>

                        {movie.release_date && (
                            <>
                                <span className="text-purple-500">•</span>
                                <span>{movie.release_date.slice(0, 4)}</span>
                            </>
                        )}
                    </div>

                    <Link
                        href={`/movies/${movie.id}`}
                        className="w-fit rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-900/40 transition hover:from-violet-500 hover:to-purple-400 hover:shadow-purple-500/30 active:scale-95">
                        View details
                        <span className="ml-2">→</span>
                    </Link>
                </div>
                {movies.length > 1 && (
                    <button
                        type="button"
                        onClick={handlePrevious}
                        aria-label="Previous movie"
                        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#171126]/70 text-2xl text-white shadow-lg backdrop-blur-md transition hover:border-violet-400/60 hover:bg-violet-600/80 sm:left-6 sm:h-12 sm:w-12">
                        ‹
                    </button>)}

                {movies.length > 1 && (
                    <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next movie"
                        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#171126]/70 text-2xl text-white shadow-lg backdrop-blur-md transition hover:border-violet-400/60 hover:bg-violet-600/80 sm:right-6 sm:h-12 sm:w-12"
                    >
                        ›
                    </button>)}

                {movies.length > 1 && (
                    <div className="absolute bottom-6 right-8 z-20 flex items-center gap-2 sm:right-12">
                        {movies.map((item, index) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to movie ${index + 1}`}
                                aria-current={index === currentIndex ? 'true' : undefined}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'w-8 bg-violet-400 shadow-[0_0_10px_#8B5CF6]'
                                        : 'w-2 bg-white/40 hover:bg-white/80'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default MovieBanner;

