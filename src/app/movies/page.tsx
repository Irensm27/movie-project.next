import React, {FC} from 'react';
import {getAllMovies, getGenres, getTopRatedMovies, searchMovie} from "@/src/services/movie.api.service";
import MoviesList from "@/src/components/movieComponents/MoviesList";
import MovieBanner from "@/src/components/movieComponents/MovieBanner";
import Header from "@/src/components/headerComponents/Header";
import Pagination from "@/src/components/pagination/Pagination";

interface IParamsProps{
    searchParams: Promise<{page?: string; query?: string}>
}

const MoviesPage:FC<IParamsProps> = async ({searchParams}) => {
    const {page, query} = await searchParams;
    const currentPage = Math.max(1, Number(page) || 1);
    const movies = query
        ? await searchMovie(query, currentPage)
        : await getAllMovies(currentPage);
    const genres = await getGenres();
    const topMovies = await getTopRatedMovies();
    const totalPages = Math.min(movies.total_pages, 500);
    return (
        <div>
            <Header />
            <MovieBanner movies={topMovies.results}/>
            <MoviesList movies={movies.results} genres={genres.genres}/>
            <Pagination currentPage={currentPage} totalPages={totalPages} query={query}/>
        </div>
    );
};

export default MoviesPage;