import type {FC} from "react";

type PosterPreviewProps = {
    posterPath: string | null;
    title: string;
};

const PosterPreview: FC<PosterPreviewProps> = ({posterPath, title}) => {

    if (!posterPath) {
        return (
            <div className="flex aspect-[2/3] w-full items-center justify-center bg-neutral-800 px-4 text-center text-neutral-400">
                No poster available
            </div>
        );
    }

    const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

    return (
        <img
            src={posterUrl}
            alt={title}
            className="aspect-[2/3] w-full object-cover"
        />
    );
};

export default PosterPreview;