import React, {FC} from 'react';
import Link from "next/link";

interface IPaginationProps{
    currentPage:number;
    totalPages:number;
    query?:string;
}

const getPages = (current: number, total: number): (number | '...')[] => {
    const delta = 2;
    const pages: (number | '...')[] = [];
    for (let i = 1; i <= total; i++) {
        if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
            pages.push(i);
        } else if (pages[pages.length - 1] !== '...') {
            pages.push('...');
        }
    }
    return pages;
};



const Pagination:FC<IPaginationProps> = ({currentPage, totalPages, query}) => {
    if (totalPages <= 1) return null;
    const makeHref = (p: number) => {
        const params = new URLSearchParams({ page: String(p) });
        if (query) params.set('query', query);
        return `?${params.toString()}`;
    };

    const base = "px-3 py-1 rounded border";

    return (
        <nav className="flex justify-center items-center gap-2 my-8">
            {currentPage > 1 && (
                <Link href={makeHref(currentPage - 1)} className={base}>‹</Link>
            )}

            {getPages(currentPage, totalPages).map((p, i) =>
                p === '...' ? (
                    <span key={`dots-${i}`} className="px-2">…</span>
                ) : (
                    <Link
                        key={p}
                        href={makeHref(p)}
                        aria-current={p === currentPage ? 'page' : undefined}
                        className={`${base} ${p === currentPage ? 'bg-blue-600 text-white' : ''}`}
                    >
                        {p}
                    </Link>
                )
            )}

            {currentPage < totalPages && (
                <Link href={makeHref(currentPage + 1)} className={base}>›</Link>
            )}
        </nav>
    );
};

export default Pagination;