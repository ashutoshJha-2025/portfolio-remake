import profileImg from "../assets/Mine_image.png";
import double_quotes from "../assets/double_quotes.png";


function Home() {
    return (
        <>
            <div id="home" className="w-screen h-screen relative">

                <div className="flex flex-col justify-center items-center absolute top-20 left-1/2 -translate-x-1/2 ">
                    <button className="border rounded-3xl py-1.5 px-4 cursor-pointer" onClick={() => { alert("Welcome to my Portfolio! Feel free to explore my projects and journey.") }}>Hello</button>
                    <h1 className="font-semibold text-5xl">I'm <span className=" text-[#f37329]">Ashutosh</span></h1>
                    <h1 className="text-lg font-semibold max-sm:text-sm">Student | Learner | Creator</h1>
                </div>

                <div className="w-130 h-65 rounded-t-full bg-[#F6AD76] absolute bottom-0 lg:left-1/2 -translate-x-1/2 overflow-visible md:left-60 max-sm:hidden sm:left-60">
                    <img src={profileImg} alt="mine image"  className="absolute w-200 left-1/2 -translate-x-1/2 bottom-0 drop-shadow-[5px_5px_10px_#555] " />
                </div>
                <img src={profileImg} alt="mine image" loading="eager" className="absolute w-60 left-1/2 -translate-x-1/2 bottom-60 sm:hidden" />

                <div className="w-75 flex flex-col gap-5 absolute sm:top-[45%] left-[4%]  max-lg:hidden max-sm:block max-sm:bottom-30">
                    <div className="max-sm:hidden"><img src={double_quotes} alt="doubleQuotes" loading="lazy" className="w-15" /></div>
                    <span className="text-[#3a3939] font-medium pl-3 max-sm:text-sm max-sm:pl-0">Passionate about problem-solving and learning new tech daily. Always curious, always coding.</span>
                </div>

                <div className="absolute sm:top-[55%] right-0 mr-7 max-md:mr-2 max-sm:bottom-5 max-sm:flex max-sm:flex-col max-sm:items-center">
                    <h4 className="font-semibold text-md max-sm:text-xs ">CSE Student | Thakur College @ Mumbai University</h4>
                    <h4 className="text-[#3a3939] font-medium mt-1 md:ml-43 max-sm:inline max-sm:ml-0 max-sm:text-xs sm:ml-20">⭐ Solved 100+ DSA Problems</h4>
                </div>
            </div>
        </>
    )
}

export default Home;
