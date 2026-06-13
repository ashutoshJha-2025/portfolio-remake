import NavButtons from "./NavButtons.jsx";

export default function Navbar() {
    return (
        <nav className="fixed top-4 w-full z-50 flex justify-center items-center">
            <div className="flex max-[350px]:w-75 items-center justify-between bg-black/90 backdrop-blur rounded-full px-3 py-2 min-[350px]:space-x-2 shadow-lg border border-white">
                <NavButtons title="About" route="/" />
                <NavButtons title="Skills" route="/skills" />
                <NavButtons title="Projects" route="/projects" />
                <NavButtons title="Contact" route="/contact" />
            </div>
        </nav>
    );
}
