import type {FC} from "react";

type PosterPreviewProps = {
    posterPath: string | null;
    title: string;
};

const PosterPreview: FC<PosterPreviewProps> = ({posterPath, title}) => {

    if (!posterPath) {
        return (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
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