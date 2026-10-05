import React, {FC} from 'react';
import {
    getGenres,
    getMovies, getMoviesByGenre,
    getTopRatedMovies,
} from "@/src/services/movie.api.service";
import MoviesList from "@/src/components/movieComponents/MoviesList";
import MovieBanner from "@/src/components/movieComponents/MovieBanner";
import Header from "@/src/components/headerComponents/Header";
import Pagination from "@/src/components/pagination/Pagination";
import GenreButtonComponent from "@/src/components/genreComponents/GenreButtonComponent";

interface IParamsProps{
    searchParams: Promise<{page?: string; query?: string; sort?:string; genre?:string}>
}

const MoviesPage:FC<IParamsProps> = async ({searchParams}) => {
    const {page, query, sort, genre} = await searchParams;
    const currentPage = Math.max(1, Number(page) || 1);
    const movies = genre
        ? await getMoviesByGenre(genre, currentPage)
        : await getMovies({
            page: currentPage,
            query,
            sortBy: sort,
        });
    const genres = await getGenres();
    const topMovies = await getTopRatedMovies();
    const totalPages = Math.min(movies.total_pages, 500);

    // ПРАВКА (пункт 2 умови): замість окремого getMoviesByGenre завжди викликати getMovies,
    // тоді жанр, пошук і сортування працюють разом. Три запити незалежні — Promise.all
    // виконує їх паралельно, а не по черзі. Імпорт getMoviesByGenre тоді прибрати.
    //
    // const [movies, genres, topMovies] = await Promise.all([
    //     getMovies({
    //         page: currentPage,
    //         query,
    //         sortBy: sort,
    //         genre,
    //     }),
    //     getGenres(),
    //     getTopRatedMovies(),
    // ]);

    return (
        <div>
            <Header />
            <MovieBanner movies={topMovies.results}/>
            <GenreButtonComponent genres={genres.genres}/>
            <MoviesList movies={movies.results} genres={genres.genres}/>
            <Pagination currentPage={currentPage} totalPages={totalPages} query={query} sort={sort} genre={genre}/>
        </div>
    );
};

export default MoviesPage;