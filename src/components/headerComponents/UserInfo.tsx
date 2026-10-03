const UserInfo = () => {
    return (
        <div className="flex items-center gap-2 rounded-full bg-neutral-800 px-3 py-2 transition hover:bg-neutral-700">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 font-semibold text-neutral-900">
                I
            </div>

            <span className="text-sm font-medium text-white">
        Iryna
    </span>
        </div>
    );
};

export default UserInfo;