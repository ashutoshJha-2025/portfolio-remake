const skills = [
    {
        id: 1,
        category: "Programming & Problem Solving",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        color: "from-orange-500 to-amber-400",
        description: "Practiced recursion, sorting algorithms, arrays, strings, stacks, and queues. Written SQL queries using SELECT, WHERE, and basic table operations.",
        tags: ["Data Structures", "Algorithms", "Java", "SQL", "Queues", "Stacks"],
    },
    {
        id: 2,
        category: "Web Development",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
        color: "from-orange-500 to-red-400",
        description: "Built full-stack web applications using the MERN stack. Developed responsive user interfaces with React and Tailwind CSS, created REST APIs with Node.js and Express, integrated databases using MongoDB (Mongoose) and MySQL, and tested APIs using Postman.",
        tags: [
            "React",
            "Tailwind CSS",
            "JavaScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs",
            "Responsive Design"
        ],
    },
    {
        id: 3,
        category: "Tools & Platforms",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
        color: "from-amber-500 to-orange-400",
        description: "Used GitHub for version control and project management. Worked with Postman for API testing and debugging, deployed projects, designed basic UI layouts in Figma and created posters and simple designs using Canva.",
        tags: ["Git", "GitHub", "Figma", "Canva", "Thumbnail Designs", "Postman", "Deployment"],
    },
    {
        id: 4,
        category: "Learning in Progress",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        color: "from-orange-400 to-yellow-400",
        description: "Currently expanding my skills in real time communication, mobile app development, containerization, and scalable software architecture to build production ready applications.",
        tags: [
            "WebSockets",
            "App Development",
            "Docker",
            "System Design",
            "Scalable Architecture",
            "Real-Time Applications"
        ],
        inProgress: true,
    },
];

function SkillCard({ skill, index }) {
    return (
        <div className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-200  hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden">
            <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${skill.color} rounded-t-2xl`} />
            <span className="absolute top-5 right-5 text-5xl font-black text-gray-100 select-none leading-none">
                {String(index + 1).padStart(2, "0")}
            </span>
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br ${skill.color} text-white mb-4 shadow-md mr-2`}>
                {skill.icon}
            </div>
            {skill.inProgress && (
                <span className="inline-flex items-center gap-1.5 mb-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    In Progress
                </span>
            )}
            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{skill.category}</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">{skill.description}</p>
            <div className="flex flex-wrap gap-1.5">
                {skill.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-orange-50 text-orange-600 border border-orange-100 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-colors duration-200"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

function Skills() {
    return (
        <>
            <div id="skills" className="w-full bg-[#fdfbfb]  px-4 font-sans flex flex-col  border-b-4 border-slate-200">
                <h2 className="font-bold max-sm:text-4xl text-6xl h-[20%] flex items-end mt-15 mb-10 gap-2">
                    My <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">Skills</span>
                </h2>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
                        {skills.map((skill, i) => (
                            <SkillCard key={skill.id} skill={skill} index={i} />
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Skills;
