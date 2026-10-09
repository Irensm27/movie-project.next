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

        params.set('page', '1');

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <form
            onSubmit={handleSearch}
            className="flex w-full max-w-md items-center gap-2"
        >

            <div className="flex flex-1 items-center rounded-xl border border-purple-500/30 bg-[#171126] transition focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-500/20">

                <span className="pl-3 text-purple-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                    </svg>
                </span>

                <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    type="text"
                    placeholder="Search movies..."
                    className="w-full bg-transparent px-3 py-2.5 text-sm text-white outline-none placeholder:text-purple-300/50"
                />

            </div>

            <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition hover:from-violet-500 hover:to-purple-400 active:scale-95"
            >
                Search
            </button>

        </form>
    );
};

export default Search;

