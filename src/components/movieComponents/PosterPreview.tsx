import type {FC} from "react";

type PosterPreviewProps = {
    posterPath: string | null;
    title: string;
};

const PosterPreview: FC<PosterPreviewProps> = ({posterPath, title}) => {

    if (!posterPath) {
        return (
            <div
                className="flex aspect-[2/3] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#211735] to-[#0B0914] px-4 text-center">
                <span className="text-5xl text-violet-400/70">
                    🎬
                </span>

                <p className="text-sm font-medium text-purple-200/60">
                    No poster available
                </p>
            </div>
        );
    }

    const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

    return (
        <img
            src={posterUrl}
            alt={title}
            loading="lazy"
            className="aspect-[2/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"/>
    );
};

export default PosterPreview;

