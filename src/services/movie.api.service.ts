
import {IMovieResponse} from "@/src/models/movieModels/IMovieResponse";
import {IMovieDetails} from "@/src/models/movieModels/IMovieDetails";
import {IGenreResponse} from "@/src/models/genreModels/IGenreResponse";

const baseUrl = 'https://api.themoviedb.org/3';

const fetchTmdb = async <T>(endpoint: string): Promise<T> => {
    const res = await fetch(`${baseUrl}${endpoint}`, {
        headers: {
            Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        },
        next: { revalidate: 3600 },
    })
        .then(value => value.json())

    if (!res.ok) {
        throw new Error(`TMDB error ${res.status}: ${endpoint}`);
    }

    return res;
};

export const getAllMovies = async ():Promise<IMovieResponse> =>
    await fetchTmdb<IMovieResponse>('/discover/movie');

export const getMovieById = async (id: string):Promise<IMovieDetails> =>
    await fetchTmdb<IMovieDetails>(`/movie/${id}`);

export const getGenres = async ():Promise<IGenreResponse>=>
    await fetchTmdb<IGenreResponse>('/genre/movie/list');

export const searchMovie = async (query: string, page: number) =>
    await fetchTmdb<IGenreResponse>('/search/movie')