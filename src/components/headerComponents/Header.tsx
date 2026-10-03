import Search from "@/src/components/headerComponents/Search";
import Sort from "@/src/components/headerComponents/Sort";
import UserInfo from "@/src/components/headerComponents/UserInfo";

const Header = () => {
    return (
        <header className="bg-neutral-900 text-white shadow-md">
            <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-4">

                <h1 className="text-2xl font-bold text-yellow-400">
                    Movies
                </h1>

                <div className="flex flex-1 items-center justify-center gap-4">
                    <Search/>
                    <Sort/>
                </div>

                <UserInfo/>

            </div>
        </header>
    );
};

export default Header;