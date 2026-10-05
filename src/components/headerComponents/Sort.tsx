'use client';

import {usePathname, useRouter, useSearchParams} from "next/navigation";

const Sort = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleSort = (sortBy: string) => {
        const params = new URLSearchParams(searchParams.toString());

        // ПРАВКА: цей рядок скидає вибраний жанр при сортуванні — його варто прибрати,
        // щоб жанр і сортування працювали разом
        params.delete('genre');

        params.set('sort', sortBy);
        params.set('page', '1');

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="flex gap-2">
            <button onClick={() => handleSort('popularity.desc')}>
                Popular
            </button>

            <button onClick={() => handleSort('vote_average.desc')}>
                Top Rated
            </button>

            <button onClick={() => handleSort('release_date.desc')}>
                Newest
            </button>
        </div>
    );
};

export default Sort;