import {BracketsRounded} from "./Icons";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center">
            <header className="tracking-widest hover:cursor-pointer flex items-center flex-row gap-1">
                <h1 className="font-semibold text-2xl text-white first-letter:text-4xl">
                    CONSOLE LOG
                </h1>
                <BracketsRounded />
            </header>
        </nav>
    )
}

export default Navbar;