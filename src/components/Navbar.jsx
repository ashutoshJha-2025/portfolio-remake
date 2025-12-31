import { useState } from "react";

const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Certificates",
    "Resume",
    "Contact",
];

export default function Navbar() {
    const [active, setActive] = useState("Home");
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-4 w-full z-50">
            <div className="flex items-center px-4">

                {/* Mobile Hamburger (LEFT, < sm) */}
                <button
                    onClick={() => setOpen(!open)}
                    className="sm:hidden bg-[#f37329] p-3 rounded-full mr-auto cursor-pointer"
                    aria-label="Toggle menu"
                >
                    <div className="space-y-1.5">
                        <span
                            className={`block w-6 h-0.5 bg-white transition
                ${open ? "rotate-45 translate-y-2" : ""}`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-white transition
                ${open ? "opacity-0" : ""}`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-white transition
                ${open ? "-rotate-45 -translate-y-2" : ""}`}
                        />
                    </div>
                </button>

                {/* Desktop Capsule Navbar (CENTER, sm+) */}
                <div className="hidden sm:flex mx-auto bg-black/90 backdrop-blur 
                        rounded-full px-3 py-2 space-x-2 shadow-lg">
                    {navLinks.map((link) => (
                        <button
                            key={link}
                            onClick={() => setActive(link)}
                            className={`px-4 py-1.5 rounded-full text-sm font-light cursor-pointer
                transition-all duration-300
                ${active === link
                                    ? "bg-orange-500 text-white"
                                    : "text-white hover:bg-white/10"
                                }`}
                        >
                            {link}
                        </button>
                    ))}
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="sm:hidden mt-3 mx-4 bg-black rounded-xl overflow-hidden shadow-lg">
                    {navLinks.map((link) => (
                        <button
                            key={link}
                            onClick={() => {
                                setActive(link);
                                setOpen(false);
                            }}
                            className="block w-full text-left px-4 py-3 text-white hover:bg-white/10"
                        >
                            {link}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
}
