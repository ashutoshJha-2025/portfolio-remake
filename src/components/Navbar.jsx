import NavButtons from "./NavButtons.jsx";

export default function Navbar() {
    return (
        <nav className="fixed top-4 w-full z-50 flex justify-center items-center">
            <div className="flex max-[350px]:w-75 items-center justify-between bg-black/90 backdrop-blur rounded-full px-3 py-2 min-[350px]:space-x-2 shadow-lg border border-white">
                <NavButtons title='About' route='/portfolio-remake/' />
                <NavButtons title='Skills' route='/portfolio-remake/skills' />
                <NavButtons title='Projects' route='/portfolio-remake/projects' />
                <NavButtons title='Contact' route='/portfolio-remake/contact' />
            </div>
        </nav>
    );
}
