
export default function Loading() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#0B0914] text-white">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-purple-500 border-t-transparent" />

            <p className="mt-4 text-lg text-purple-300">
                Loading movies...
            </p>
        </main>
    );
}
