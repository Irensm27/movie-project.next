import Search from "@/src/components/headerComponents/Search";
import Sort from "@/src/components/headerComponents/Sort";
import UserInfo from "@/src/components/headerComponents/UserInfo";
import Link from "next/link";

const Header = () => {
    return (
        <header className="border-b border-purple-900/40 bg-[#0B0914] text-white shadow-lg shadow-purple-950/10">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-6 py-5">

                <div className="flex items-center gap-3">
                    <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 shadow-lg shadow-purple-500/20">
                        <span className="text-xl">🎬</span>
                    </div>

                <Link href="/movies">
                    <div>
                        <h1 className="text-2xl font-extrabold tracking-tight text-white">
                            Movie<span className="text-violet-400">Verse</span>
                        </h1>

                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-purple-300/60">
                            Your cinema universe
                        </p>
                    </div>
                </Link>
                </div>


                <div className="flex flex-1 flex-wrap items-center justify-center gap-4">
                    <Search/>
                    <Sort/>
                </div>

                <div className="flex items-center rounded-full border border-purple-500/20 bg-[#171126] px-3 py-2">
                    <UserInfo/>
                </div>

            </div>
        </header>
    );
};

export default Header;
