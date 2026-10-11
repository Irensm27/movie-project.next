import React, { FC } from 'react';
import {getGenres, getMovies, getTopRatedMovies,} from "@/src/services/movie.api.service";
import MoviesList from "@/src/components/movieComponents/MoviesList";
import MovieBanner from "@/src/components/movieComponents/MovieBanner";
import Header from "@/src/components/headerComponents/Header";
import Pagination from "@/src/components/pagination/Pagination";
import GenreButtonComponent from "@/src/components/genreComponents/GenreButtonComponent";

interface IParamsProps {
    searchParams: Promise<{
        page?: string;
        query?: string;
        sort?: string;
        genre?: string;
    }>;
}

const MoviesPage: FC<IParamsProps> = async ({searchParams}) => {
    const {page, query, sort, genre} = await searchParams;

    const currentPage = Math.max(1, Number(page) || 1);

    const [movies, genres, topMovies] = await Promise.all([
        getMovies({page: currentPage, query, sortBy: sort, genre,}),
        getGenres(),
        getTopRatedMovies(),
    ]);
    const totalPages = Math.min(movies.total_pages, 500);

    return (
        <main className="min-h-screen bg-[#0B0914] text-white">

            <Header />
            <MovieBanner movies={topMovies.results} />

            <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6">
                <div className="mb-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-violet-400">
                        Explore movies
                    </p>

                    <h2 className="text-2xl font-bold sm:text-3xl">
                        Browse by genre
                    </h2>
                </div>

                <GenreButtonComponent genres={genres.genres} />
            </section>

            <section className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6">

                <div className="mb-6">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-violet-400">
                        Movie collection
                    </p>

                    <h2 className="text-2xl font-bold sm:text-3xl">
                        Discover movies
                    </h2>
                </div>

                <MoviesList
                    movies={movies.results}
                    genres={genres.genres}/>

                <div className="mt-10 flex justify-center">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        query={query}
                        sort={sort}
                        genre={genre}/>
                </div>
            </section>

            <footer className="border-t border-purple-500/15 px-4 py-6 text-center">
                <p className="text-sm text-purple-200/50">
                    MovieVerse
                    <span className="mx-2 text-purple-500">•</span>
                    Discover your next favorite movie
                </p>
            </footer>

        </main>
    );
};

export default MoviesPage;

