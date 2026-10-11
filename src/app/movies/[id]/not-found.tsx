import Link from 'next/link';

export default function MovieNotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#0B0914] px-4 text-center text-white">
            <h1 className="text-4xl font-bold text-purple-400">
                Movie not found
            </h1>

            <p className="mt-4 text-gray-400">
                Sorry, we can not find this movie.
            </p>

            <Link
                href="/movies"
                className="mt-6 rounded-lg bg-purple-600 px-5 py-3 transition hover:bg-purple-500"
            >
                Back to movies
            </Link>
        </main>
    );
}
