import { useNavigate } from "react-router-dom"
import portfolioBgImage from '../assets/portfolioBgImage.png'
import expenseTrackerBgImage from '../assets/expenseTrackerBgImage.png'
import jobPortalBgImage from '../assets/jobPortalBgImage.png'
import dsaJavaBgImage from '../assets/dsaJavaBgImage.png'
import reactBgImage from '../assets/reactBgImage.png'
import weatherAppBgImage from '../assets/weatherAppBgImage.png'
import thumbnailBgImage from '../assets/ThumbanailDesignBgImage.png'
import letterBgImage from '../assets/letterBgImage.png'

const projects = [
    {
        id: 1,
        title: "Portfolio",
        subtitle: "React Developer Portfolio",
        year: "2025",
        tags: ["React", "TailwindCSS", "Email js"],
        badge: "Latest",
        badgeEmoji: "✨",
        badgeColor: "bg-purple-600/80 text-purple-100",
        description:
            "A modern portfolio website showcasing projects, technical skills, with responsive design and smooth UI.",
        gradient: "from-zinc-900 via-red-950 to-zinc-800",
        accentColor: "text-violet-400",
        borderAccent: "border-violet-500/40",
        glowColor: "shadow-violet-500/20",
        liveUrl: "https://ashutoshjha-2025.github.io/portfolio-remake/",
        githubUrl: "https://github.com/ashutoshJha-2025/portfolio-remake.git",
        bgImageUrl: portfolioBgImage,
    },

    {
        id: 2,
        title: "Expense Tracker",
        subtitle: "Finance Management System",
        year: "2026",
        tags: ["Express", "React", "Node.js", "MongoDB", "TailwindCSS"],
        badge: "Backend",
        badgeEmoji: "",
        badgeColor: "bg-blue-600/80 text-blue-100",
        description:
            "A complete expense tracking with transaction management, categories, accounts, and REST APIs for personal finance monitoring.",
        gradient: "from-rose-800 via-orange-700 to-amber-600",
        accentColor: "text-cyan-400",
        borderAccent: "border-cyan-500/40",
        glowColor: "shadow-cyan-500/20",
        liveUrl: "https://spendify-1b1h.onrender.com/",
        githubUrl: "https://github.com/ashutoshJha-2025/Expense_Tracker.git",
        bgImageUrl: expenseTrackerBgImage
    },

    {
        id: 3,
        title: "Job Portal",
        subtitle: "MERN Stack Application",
        year: "2026",
        tags: ["Express", "React", "Node.js", "MongoDB", "TailwindCSS"],
        badge: "",
        badgeEmoji: "",
        badgeColor: "bg-green-600/80 text-green-100",
        description:
            "A job portal where recruiters can post jobs and candidates can browse and apply.",
        gradient: "from-amber-600 via-orange-500 to-yellow-400",
        accentColor: "text-amber-400",
        borderAccent: "border-amber-500/40",
        glowColor: "shadow-amber-500/20",
        liveUrl: "https://job-portal-one-phi-72.vercel.app",
        githubUrl: "https://github.com/ashutoshJha-2025/Job_Portal.git",
        bgImageUrl: jobPortalBgImage
    },

    {
        id: 4,
        title: "DSA Projects Collection",
        subtitle: "Java Data Structures & Algorithms",
        year: "2025",
        tags: ["Java", "DSA", "Graphs", "OOP"],
        badge: "Problem Solving",
        badgeColor: "bg-orange-600/80 text-orange-100",
        description:
            "A collection of Java projects including Password Manager, Quiz App, Shopping Cart System, Task Tracker, Social Network Graph.",
        gradient: "from-slate-900 via-blue-950 to-indigo-900",
        accentColor: "text-orange-400",
        borderAccent: "border-orange-500/40",
        glowColor: "shadow-orange-500/20",
        liveUrl: "https://github.com/ashutoshJha-2025/DSA-Projects-in-java.git",
        githubUrl: "https://github.com/ashutoshJha-2025/DSA-Projects-in-java.git",
        bgImageUrl: dsaJavaBgImage
    },

    {
        id: 5,
        title: "ReactJS Projects",
        subtitle: "Frontend UI Collection",
        year: "2026",
        tags: ["React", "TailwindCSS", "Context API", "Router"],
        badge: "Frontend",
        badgeEmoji: "",
        badgeColor: "bg-pink-600/80 text-pink-100",
        description:
            "A collection of React projects including Theme Toggle, Product Store, and Todo App focused on reusable components and responsive UI design.",
        gradient: "from-pink-900 via-rose-700 to-red-500",
        accentColor: "text-pink-400",
        borderAccent: "border-pink-500/40",
        glowColor: "shadow-pink-500/20",
        liveUrl: " https://ashutoshjha-2025.github.io/ReactJS_Projects/04_DiningTable/",
        githubUrl: "https://github.com/ashutoshJha-2025/ReactJS_Projects.git",
        bgImageUrl: reactBgImage
    },

    {
        id: 6,
        title: "Frontend Projects",
        subtitle: "HTML, CSS & JavaScript",
        year: "2025",
        tags: ["HTML", "TailwindCSS", "JavaScript"],
        badge: "",
        badgeEmoji: "",
        badgeColor: "bg-yellow-600/80 text-yellow-100",
        description:
            "A collection of frontend projects including News Website, Weather App, and Todo App built using core web technologies.",
        gradient: "from-yellow-900 via-amber-700 to-orange-500",
        accentColor: "text-yellow-400",
        borderAccent: "border-yellow-500/40",
        glowColor: "shadow-yellow-500/20",
        liveUrl: "https://ashutoshjha-2025.github.io/Frontend-Projects/WeatherApp/",
        githubUrl: "https://github.com/ashutoshJha-2025/Frontend-Projects.git",
        bgImageUrl: weatherAppBgImage
    },

    {
        id: 7,
        title: "Thumbnail Designs",
        subtitle: "Creative Design Portfolio",
        year: "2025",
        tags: ["Pixellab", "Canva", "Design"],
        badge: "Creative Work",
        badgeColor: "bg-red-600/80 text-red-100",
        description:
            "A collection of educational and YouTube thumbnail designs created for JEE content, focusing on visual hierarchy, branding, and engagement.",
        gradient: "from-red-900 via-red-700 to-orange-500",
        accentColor: "text-red-400",
        borderAccent: "border-red-500/40",
        glowColor: "shadow-red-500/20",
        liveUrl: "https://ashutoshjha-2025.github.io/Thumbnail_Designs/",
        githubUrl: "https://github.com/ashutoshJha-2025/Thumbnail_Designs.git",
        bgImageUrl: thumbnailBgImage
    },

    {
        id: 8,
        title: "Proposal Letter",
        subtitle: "Interactive React Proposal App",
        year: "2026",
        tags: ["React", "React Router", "TailwindCSS", "Vite"],
        badge: "Vibe Coding",
        badgeColor: "bg-orange-300/80 text-orange-950",
        description:
            "A fun proposal web app that lets users create a personalized letter, generate a shareable link, and surprise their loved one with an escaping NO button, animated YES button, and playful taglines.",
        gradient: "from-orange-100 via-amber-200 to-orange-300",
        accentColor: "text-orange-300",
        borderAccent: "border-orange-300/40",
        glowColor: "shadow-orange-300/30",
        liveUrl: "https://ashutoshjha-2025.github.io/Valentine-Special/#/",
        githubUrl: "https://github.com/ashutoshJha-2025/Valentine-Special",
        bgImageUrl: letterBgImage,
    },
];

function ProjectCard({ project }) {
    return (
        <div
            className={`w-75 h-100 max-[350px]:w-70
        relative overflow-hidden rounded-2xl  select-none
        transition-all duration-500 ease-out
        border ${project.borderAccent} `}
            style={{
                aspectRatio: "9/14"
            }}
        >
            <div className={`absolute inset-0 bg-linear-to-br ${project.gradient}`} />

            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[85%] -rotate-3 rounded-xl overflow-hidden shadow-2xl border border-white/10">
                <div className="bg-zinc-800 px-3 py-1.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                <img
                    src={project.bgImageUrl}
                    alt={project.title}
                    className="w-full h-32 object-cover object-top"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
            </div>
            {/* Bottom dark scrim for text readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent" />

            {/* Top badge */}
            {project.badge && (
                <div className="absolute top-3 left-3 z-20">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg backdrop-blur-sm ${project.badgeColor}`}>
                        {project.badgeEmoji} {project.badge}
                    </span>
                </div>
            )}

            {/* Bottom content */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3 className={`font-bold text-xl leading-tight text-white `}>
                    {project.title}
                </h3>
                <p className={`text-sm text-white/60 mt-0.5 `}>
                    {project.subtitle}
                </p>

                <div className={`mt-2 flex flex-wrap gap-1.5`}>
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/10"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <p className={`text-xs text-white/50 mt-2 leading-relaxed line-clamp-2 `}>
                    {project.description}
                </p>

                <div className={`mt-3 flex gap-2`}>
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 text-center text-xs font-semibold py-2 px-3 rounded-xl bg-white text-black hover:bg-white/90 transition-colors`}
                    >
                        Live
                    </a>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center text-xs font-semibold py-2 px-3 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
                    >
                        GitHub
                    </a>
                </div>

                <p className={`${project.accentColor} text-[11px] font-medium mt-2`}>
                    {project.year} • {project.tags[0]}
                </p>
            </div>
        </div>
    );
}

const ProjectPage = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="w-full min-h-screen flex flex-col items-center bg-[#0e0d0d] font-sans text-white p-6">

                <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-15">
                    {projects.map((project) => (
                        <ProjectCard project={project} key={project.id} />
                    ))}
                </div>

                <div className="flex max-[400px]:w-70 w-100 sm:w-150 flex-col sm:flex-row items-center justify-between gap-4 bg-linear-to-r from-orange-500 to-amber-400 rounded-2xl px-6 py-4  max-[400px]:p-2">
                    <div>
                        <p className="text-white font-bold text-lg leading-tight">Always learning, always building.</p>
                        <p className="text-orange-100 text-sm mt-0.5">Open to internships, freelance, and collaborations.</p>
                    </div>
                    <button
                        onClick={() => navigate('/contact')}
                        className="shrink-0 cursor-pointer bg-white text-orange-500 font-bold text-sm px-6 py-3 rounded-xl hover:bg-orange-50 active:scale-95 transition-all duration-150 shadow-sm">
                        Let's Connect
                    </button>
                </div>
            </div>

        </>
    )
}

export default ProjectPage