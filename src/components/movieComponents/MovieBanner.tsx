'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IMovie } from '@/src/models/movieModels/IMovie';

interface IMovieBannerProps {
    movies: IMovie[];
}

const MovieBanner = ({ movies }: IMovieBannerProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (movies.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex(prev =>
                (prev + 1) % movies.length
            );
        }, 10000);

        return () => clearInterval(interval);
    }, [movies.length]);

    if (movies.length === 0) return null;

    const movie = movies[currentIndex];

    return (
        <div className="relative h-[450px] w-full overflow-hidden rounded-xl bg-neutral-900">
            {movie.backdrop_path && (
                <img
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.title}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            )}

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

            <div className="relative z-10 flex h-full max-w-2xl flex-col justify-center p-8 text-white">
                <h1 className="mb-4 text-4xl font-bold">
                    {movie.title}
                </h1>

                <p className="mb-6 line-clamp-4 text-neutral-200">
                    {movie.overview}
                </p>

                <Link
                    href={`/movies/${movie.id}`}
                    className="w-fit rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-neutral-900 hover:bg-yellow-300"
                >
                    View details
                </Link>
            </div>
        </div>
    );
};

export default MovieBanner;