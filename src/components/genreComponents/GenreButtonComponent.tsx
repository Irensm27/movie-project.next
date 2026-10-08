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

    const handleGenre = (genreId: string) => {
        const params = new URLSearchParams(searchParams.toString());

        params.set('genre', genreId);

        params.set('page', '1');

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="flex flex-wrap justify-center gap-2 p-4">
            <button onClick={() => router.push('/movies')}
                    className="rounded-full border border-neutral-500 px-4 py-2 text-sm text-neutral-300 transition hover:bg-neutral-700" >
                All
            </button>
            {genres.map((genre) => ( <button key={genre.id} onClick={() =>
                    handleGenre(String(genre.id)
                    )} className="rounded-full border border-yellow-400 px-4 py-2 text-sm text-yellow-400 transition hover:bg-yellow-400 hover:text-black" >
                    {genre.name}
                </button> )
            )}
        </div>
    );
};

export default GenreButtonComponent;
