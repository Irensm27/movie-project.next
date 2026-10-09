'use client';

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {IGenre} from "@/src/models/genreModels/IGenre";

interface IGenreFilterProps {
    genres: IGenre[];
}

const GenreButtonComponent = ({genres}: IGenreFilterProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentGenre = searchParams.get('genre');

    const handleGenre = (genreId: string) => {
        const params = new URLSearchParams(searchParams.toString());

        params.set('genre', genreId);
        params.set('page', '1');

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="flex flex-wrap justify-center gap-2 p-4">

            <button
                onClick={() => router.push('/movies')}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
    !currentGenre
        ? 'border-violet-400 bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-md shadow-purple-900/20'
        : 'border-purple-500/30 bg-[#171126] text-purple-200 hover:border-violet-400/60 hover:bg-purple-500/20 hover:text-white'
}`}
            >
                All
            </button>

            {genres.map((genre) => {
                const isActive = currentGenre === String(genre.id);

                return (
                    <button
                        key={genre.id}
                        onClick={() => handleGenre(String(genre.id))}
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
    isActive
        ? 'border-violet-400 bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-md shadow-purple-900/20'
        : 'border-purple-500/30 bg-[#171126] text-purple-200 hover:border-violet-400/60 hover:bg-purple-500/20 hover:text-white'
}`}
                    >
                        {genre.name}
                    </button>
                );
            })}

        </div>
    );
};

export default GenreButtonComponent;