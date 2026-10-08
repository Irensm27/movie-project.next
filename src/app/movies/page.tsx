import React, {FC} from 'react';
import {getGenres, getMovies, getTopRatedMovies,
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
    const [movies, genres, topMovies] = await Promise.all([
        getMovies({
            page: currentPage,
            query,
            sortBy: sort,
            genre,
        }),
        getGenres(),
        getTopRatedMovies(),
    ]);
    const totalPages = Math.min(movies.total_pages, 500);

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