import { useNavigate } from "react-router-dom"

const ProjectPage = () => {
const navigate = useNavigate()

    return (
        <>
            <div className="w-full h-full flex items-center justify-center">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-linear-to-r from-orange-500 to-amber-400 rounded-2xl px-8 py-6 shadow-lg shadow-orange-100">
                    <div>
                        <p className="text-white font-bold text-lg leading-tight">Always learning, always building.</p>
                        <p className="text-orange-100 text-sm mt-0.5">Open to internships, freelance, and collaborations.</p>
                    </div>
                    <button 
                        onClick={() => navigate('/portfolio-remake/contact')}
                    className="shrink-0 cursor-pointer bg-white text-orange-500 font-bold text-sm px-6 py-3 rounded-xl hover:bg-orange-50 active:scale-95 transition-all duration-150 shadow-sm">
                        Contact Me →
                    </button>
                </div>
            </div>

        </>
    )
}

export default ProjectPage