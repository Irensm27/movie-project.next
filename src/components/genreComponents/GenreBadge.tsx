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
            <div className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-neutral-900">
                {genre.name}
            </div>
        );
    }

    return (
        <Link
            href={`/movies?genre=${genre.id}`}
            className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-neutral-900 cursor-pointer transition hover:bg-yellow-300"
        >
            {genre.name}
        </Link>
    );
};

export default GenreBadge;