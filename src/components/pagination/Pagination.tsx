import Link from "next/link";

interface IPaginationProps {
    currentPage: number;
    totalPages: number;
    query?: string;
    sort?: string;
    genre?: string;
}

const Pagination = ({currentPage, totalPages, query, sort, genre}: IPaginationProps) => {

    if (totalPages <= 1) {
        return null;
    }

    const pages = [];

    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for (let page = startPage; page <= endPage; page++) {
        pages.push(page);
    }

    const createUrl = (page: number) => {
        return `?page=${page}${
            query ? `&query=${encodeURIComponent(query)}` : ""
        }${
            sort ? `&sort=${encodeURIComponent(sort)}` : ""
        }${
            genre ? `&genre=${encodeURIComponent(genre)}` : ""
        }`;
    };

    return (
        <div className="flex justify-center items-center gap-2 my-8">

            {currentPage > 1 && (
                <Link
                    href={createUrl(currentPage - 1)}
                    className="px-3 py-1 rounded border"
                >
                    ←
                </Link>
            )}

            {startPage > 1 && (
                <>
                    <Link
                        href={createUrl(1)}
                        className="px-3 py-1 rounded border"
                    >
                        1
                    </Link>

                    {startPage > 2 && <span>...</span>}
                </>
            )}

            {pages.map((page) => (
                <Link
                    key={page}
                    href={createUrl(page)}
                    className={`px-3 py-1 rounded border ${
                        page === currentPage
                            ? "bg-yellow-400 text-black"
                            : ""
                    }`}
                >
                    {page}
                </Link>
            ))}

            {endPage < totalPages && (
                <>
                    {endPage < totalPages - 1 && <span>...</span>}

                    <Link
                        href={createUrl(totalPages)}
                        className="px-3 py-1 rounded border"
                    >
                        {totalPages}
                    </Link>
                </>
            )}

            {currentPage < totalPages && (
                <Link
                    href={createUrl(currentPage + 1)}
                    className="px-3 py-1 rounded border"
                >
                    →
                </Link>
            )}

        </div>
    );
};

export default Pagination;