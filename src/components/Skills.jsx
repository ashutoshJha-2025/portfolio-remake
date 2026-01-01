function Skills() {
    const dots = ["orange", "black", "orange", "black"];

    return (
        <>
            <div id="Skills" className="h-screen w-screen relative ">
                <h1 className="text-[#f37329] absolute top-20 left-1/2 -translate-x-1/2 font-semibold text-6xl max-sm:top-8 ">Skills</h1>

                <div className="w-[95%] h-110 flex absolute bottom-0 left-1/2 -translate-x-1/2 max-sm:bottom-15 justify-around">
                    <div className="flex flex-col justify-around">

                        <div>
                            <h2 className="font-semibold text-2xl max-sm:text-xl">💻 Programming & Problem Solving</h2>
                            <ul className="list-disc list-outside ml-13">
                                <li>Data Structures & Algorithms (Java)</li>
                                <li>SQL (Basics & Queries)</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-semibold text-2xl max-sm:text-xl">🌐 Web Development</h2>
                            <ul className="list-disc list-outside ml-13">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-semibold text-2xl max-sm:text-xl">🧰 Tools & Platforms</h2>
                            <ul className="list-disc list-outside ml-13">
                                <li>Git & Github</li>
                                <li>Figma (Basic UI/UX Design)</li>
                                <li>Canva (Design & Prototyping)</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-semibold text-2xl max-sm:text-xl">📘 Learning in Progress</h2>
                            <ul className="list-disc list-outside ml-13">
                                <li>Backend</li>
                            </ul>
                        </div>

                    </div>


                    <div className="w-20 h-107.5 flex flex-col justify-around items-center max-md:hidden">
                        {dots.map((color, index) => (
                            <div key={index} className="flex flex-col items-center">

                                <div className="relative w-12.5 h-12.5 rounded-full border-2 border-dashed border-gray-600 flex items-center justify-center">
                                    <div
                                        className={`w-7.5 h-7.5 rounded-full ${color === "orange" ? "bg-orange-500" : "bg-black"
                                            }`}
                                    />
                                </div>

                                {index !== dots.length - 1 && (
                                    <div className="w-0.5 h-17.5 bg-[repeating-linear-gradient(to_bottom,#333_0_5px,transparent_5px_10px)]" />
                                )}

                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col w-150 justify-around items-center max-md:hidden">
                        <p className="text-[#333] font-light text-lg">Practiced recursion, sorting algorithms, arrays, strings, stacks, and queues.
                            Written SQL queries using SELECT, WHERE, and basic table operations.
                        </p>

                        <p className="text-[#333] font-light text-lg">Created responsive layouts, worked with positioning, used APIs, built a real-time clock, and implemented local storage for saving data.
                        </p>

                        <p className="text-[#333] font-light text-lg">Used GitHub for version control and project management. Designed basic UI layouts in Figma and created posters and simple designs using Canva.
                        </p>

                        <p className="text-[#333] font-light text-lg">Building foundational knowledge in backend development, including server-side concepts, databases, APIs, and basic security practices.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Skills;
