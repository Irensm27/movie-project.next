'use client';

import { useEffect } from 'react';

interface IErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: IErrorProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#0B0914] px-4 text-center text-white">
            <h2 className="text-2xl font-bold text-purple-300">
                Something went wrong
            </h2>

            <p className="mt-3 text-gray-400">
                We could not load the movies. Please try again.
            </p>

            <button
                onClick={reset}
                className="mt-6 rounded-lg bg-purple-600 px-5 py-3 transition hover:bg-purple-500"
            >
                Try again
            </button>
        </main>
    );
}
