import type {FC} from "react";
import Link from "next/link";
import {IGenre} from "@/src/models/genreModels/IGenre";

interface IGenreBadgeProps {
    genre: IGenre;
    clickable?: boolean;
}

const GenreBadge: FC<IGenreBadgeProps> = ({genre, clickable = true}) => {
    if (!clickable) {
        return (
            <div className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-200">
                {genre.name}
            </div>
        );
    }

    return (
        <Link
            href={`/movies?genre=${genre.id}`}
            className="inline-flex cursor-pointer rounded-full border border-violet-500/30 bg-gradient-to-r from-violet-600/20 to-purple-500/20 px-3 py-1 text-xs font-semibold text-violet-200 transition hover:border-violet-400/60 hover:from-violet-600 hover:to-purple-500 hover:text-white"
        >
            {genre.name}
        </Link>
    );
};

export default GenreBadge;
