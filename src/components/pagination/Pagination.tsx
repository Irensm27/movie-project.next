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

    const pageButtonStyle =
        "px-3 py-1 rounded-lg border border-purple-800/60 transition-colors duration-200";

    return (
        <div className="flex justify-center items-center gap-2 my-8 flex-wrap">

            {currentPage > 1 && (
                <Link
                    href={createUrl(currentPage - 1)}
                    className={`${pageButtonStyle} bg-[#1A1628] text-gray-300 hover:bg-purple-900/60 hover:text-white`}
                >
                    ←
                </Link>
            )}

            {startPage > 1 && (
                <div className="flex items-center gap-2">
                    <Link
                        href={createUrl(1)}
                        className={`${pageButtonStyle} bg-[#1A1628] text-gray-300 hover:bg-purple-900/60 hover:text-white`}
                    >
                        1
                    </Link>

                    {startPage > 2 && (
                        <span className="text-purple-300">...</span>
                    )}
                </div>
            )}

            {pages.map((page) => (
                <Link
                    key={page}
                    href={createUrl(page)}
                    className={`${pageButtonStyle} ${
                        page === currentPage
                            ? "bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-900/30"
                            : "bg-[#1A1628] text-gray-300 hover:bg-purple-900/60 hover:text-white"
                    }`}
                >
                    {page}
                </Link>
            ))}

            {endPage < totalPages && (
                <div className="flex items-center gap-2">
                    {endPage < totalPages - 1 && (
                        <span className="text-purple-300">...</span>
                    )}

                    <Link
                        href={createUrl(totalPages)}
                        className={`${pageButtonStyle} bg-[#1A1628] text-gray-300 hover:bg-purple-900/60 hover:text-white`}
                    >
                        {totalPages}
                    </Link>
                </div>
            )}

            {currentPage < totalPages && (
                <Link
                    href={createUrl(currentPage + 1)}
                    className={`${pageButtonStyle} bg-[#1A1628] text-gray-300 hover:bg-purple-900/60 hover:text-white`}
                >
                    →
                </Link>
            )}

        </div>
    );
};

export default Pagination;