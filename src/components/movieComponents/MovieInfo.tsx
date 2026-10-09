import { IMovie } from "@/src/models/movieModels/IMovie";
import type { FC } from "react";
import { IGenre } from "@/src/models/genreModels/IGenre";
import GenreBadge from "@/src/components/genreComponents/GenreBadge";

interface IMovieInfoProps {
    movie: IMovie;
    genres: IGenre[];
}

const MovieInfo: FC<IMovieInfoProps> = ({ movie, genres }) => {

    const movieGenres = genres.filter(genre =>
        movie.genre_ids.includes(genre.id)
    );

    return (
        <div>

            <h2 className="mb-2 line-clamp-2 text-lg font-bold text-purple-50 transition-colors hover:text-violet-300">
                {movie.title}
            </h2>


            <p className="mb-4 line-clamp-3 text-sm leading-6 text-purple-200/60">
                {movie.overview || "No description available."}
            </p>


            <div className="flex flex-wrap gap-2">
                {movieGenres.map(genre => (
                    <GenreBadge
                        genre={genre}
                        key={genre.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieInfo;

