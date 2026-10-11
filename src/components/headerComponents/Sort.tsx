'use client';

import {usePathname, useRouter, useSearchParams} from "next/navigation";

const Sort = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentSort = searchParams.get('sort') || 'popularity.desc';

    const handleSort = (sortBy: string) => {
        const params = new URLSearchParams(searchParams.toString());

        params.set('sort', sortBy);

        params.set('page', '1');

        router.push(`${pathname}?${params.toString()}`);
    };

    const buttonClass = (sortBy: string) => `
        rounded-lg px-3 py-2 text-sm font-medium transition
        active:scale-95
        ${currentSort === sortBy
        ? 'bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-md shadow-purple-900/20'
        : 'text-purple-200 hover:bg-purple-500/20 hover:text-white'
    }
`;

    return (
        <div className="flex flex-wrap items-center gap-2 rounded-xl border border-purple-500/20 bg-[#171126] p-1.5">

            <button
                onClick={() => handleSort('popularity.desc')}
                className={buttonClass('popularity.desc')}
            >
                Popular
            </button>

            <button
                onClick={() => handleSort('vote_average.desc')}
                className={buttonClass('vote_average.desc')}
            >
                Top Rated
            </button>

            <button
                onClick={() => handleSort('release_date.desc')}
                className={buttonClass('release_date.desc')}
            >
                Newest
            </button>

        </div>
    );
};

export default Sort;

