'use client';

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useState} from "react";

const Search = () => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [query, setQuery] = useState(
        searchParams.get('query') || ''
    );

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();

        const params = new URLSearchParams(searchParams.toString());

        if (query.trim()) {
            params.set('query', query.trim());
        } else {
            params.delete('query');
        }

        // після нового пошуку починаємо з першої сторінки
        params.set('page', '1');

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <form onSubmit={handleSearch} className="flex gap-2">

            <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                placeholder="Search"
                className="rounded px-3 py-2 text-black"
            />

            <button
                type="submit"
                className="rounded bg-yellow-400 px-4 py-2 text-black"
            >
                Search
            </button>

        </form>
    );
};

export default Search;