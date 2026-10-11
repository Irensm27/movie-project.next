const UserInfo = () => {
    return (
        <div
            className="flex items-center gap-3 rounded-full border border-purple-500/20 bg-[#171126] px-3 py-2 transition hover:border-purple-400/40 hover:bg-[#211735]">

            <div
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-purple-600 font-semibold text-white shadow-md shadow-purple-500/20">
                I
            </div>

            <span className="text-sm font-medium text-purple-100">
                Iryna
            </span>

        </div>
    );
};

export default UserInfo;
