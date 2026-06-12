import { NavLink } from "react-router-dom"

const NavButtons = ({ title, route }) => {
    return (
        <>
            <NavLink
                to={route}
                end={route === "/portfolio-remake/"}
                className={({ isActive }) => `px-2 min-[350px]:px-4 py-1.5 rounded-full text-sm font-normal cursor-pointer transition-all duration-300
                ${isActive ? "bg-orange-500 text-white" : "text-white hover:bg-white/10"}`}
            >
                {title}
            </NavLink>
        </>
    )
}

export default NavButtons