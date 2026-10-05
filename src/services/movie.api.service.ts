
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
    });

    if (!res.ok) {
        throw new Error(`TMDB error ${res.status}: ${endpoint}`);
    }

    return res.json();
};

interface IMovieFilters {
    page?: number;
    query?: string;
    sortBy?: string;
    genre?: string;
}

export const getMovies = async ({
                                    page = 1,
                                    query,
                                    sortBy,
                                    genre,
                                }: IMovieFilters): Promise<IMovieResponse> => {

    const params = new URLSearchParams();

    params.set('page', String(page));

    if (query) {
        params.set('with_text_query', query);
    }

    if (sortBy) {
        params.set('sort_by', sortBy);
    }

    if (genre) {
        params.set('with_genres', genre);
    }

    if (sortBy === 'release_date.desc') {
        const today = new Date().toISOString().split('T')[0];

        params.set('primary_release_date.lte', today);
    }

    // ПРАВКА: без мінімальної кількості голосів "Top Rated" показує невідомі фільми
    // з 1–2 голосами і рейтингом 10
    //
    // if (sortBy === 'vote_average.desc') {
    //     params.set('vote_count.gte', '200');
    // }

    return await fetchTmdb<IMovieResponse>(
        `/discover/movie?${params.toString()}`
    );
};

// ПРАВКА: старі закоментовані функції (getAllMovies, getMoviesBySort, searchMovie)
// вже замінені на getMovies — перед здачею їх варто видалити.

// export const getAllMovies = async (page:number=1):Promise<IMovieResponse> =>
//     await fetchTmdb<IMovieResponse>(`/discover/movie?page=${page}`);
//
// export const getMoviesBySort = async (sortBy: string, page: number = 1): Promise<IMovieResponse> => {
//
//     const today = new Date().toISOString().split('T')[0];
//
//     const releaseDateFilter =
//         sortBy === 'release_date.desc'
//             ? `&primary_release_date.lte=${today}`
//             : '';
//
//     return await fetchTmdb<IMovieResponse>(
//         `/discover/movie?sort_by=${sortBy}&page=${page}${releaseDateFilter}`);};

export const getMovieById = async (id: string):Promise<IMovieDetails> =>
    await fetchTmdb<IMovieDetails>(`/movie/${id}`);

export const getGenres = async ():Promise<IGenreResponse>=>
    await fetchTmdb<IGenreResponse>('/genre/movie/list');

// ПРАВКА: getMovies уже приймає genre, тож ця функція зайва — після правки
// в movies/page.tsx її можна видалити.
export const getMoviesByGenre = async (
    genreId: string,
    page: number = 1
): Promise<IMovieResponse> =>
    await fetchTmdb<IMovieResponse>(
        `/discover/movie?with_genres=${genreId}&page=${page}`
    );

// export const searchMovie = async (query: string, page: number = 1):Promise<IMovieResponse> =>
//     await fetchTmdb<IMovieResponse>(`/search/movie?query=${encodeURIComponent(query)}&page=${page}`);

export const getTopRatedMovies = async (page: number = 1):Promise<IMovieResponse> =>
    await fetchTmdb<IMovieResponse>(`/movie/top_rated?page=${page}`);

