import background_image from "../assets/bg_image.webp";

function About() {
    return (
        <>
            <div id="About" className="h-screen w-screen bg-cover bg-center bg-no-repeat rounded-4xl shadow-[0_-10px_30px_0_rgba(17,17,17,0.9)] relative" style={{ backgroundImage: `url(${background_image})` }}>
                <div className="flex gap-3 text-white lg:text-6xl font-semibold absolute sm:top-25 left-1/2 -translate-x-1/2 md:text-4xl max-sm:top-5 max-sm:text-3xl">
                    <h1>About</h1>
                    <h1 className="text-[#f37329]">Me</h1>
                </div>

                <p className="text-white mx-4 lg:p-4 absolute sm:top-40 font-light lg:text-lg md:text-md md:p-0 max-sm:font-extralight max-sm:top-15 max-sm:text-sm max-sm:wrap">Hello! My name is Ashutosh Jha, and I am pursuing a degree in Computer Science & Engineering (Cyber Security) at Thakur College, Mumbai University. I have a strong enthusiasm for problem-solving, web development, and I am currently exploring React. I have tackled data structures and algorithms problems on websites such as LeetCode and have established a firm understanding of Java and frontend development. I enjoy building and breaking things to understand how they work.</p>

                <div className="absolute bottom-0 flex sm:justify-around items-center left-1/2 -translate-x-1/2 h-75 w-[95%] sm:mx-4 max-sm:flex-col max-sm:bottom-20 max-sm:p-2 max-sm:gap-4">

                    <div className="bg-[#ffffff0d] rounded-4xl h-55 lg:w-125 border border-[#3a3939] backdrop-blur-md md:w-90 max-sm:w-80 max-sm:h-35 max-sm:rounded-2xl">
                        <h4 className="text-[#F6AD76] sm:mt-2.5 sm:ml-7.5 text-3xl max-sm:text-xl max-sm:mt-0.5 max-sm:ml-20">My Interests :</h4>
                        <div className="border-0 border-t-2 border-t-[rgb(58,57,57)] my-2.5 mx-7.5 max-sm:my-0.5"></div>
                        <ul className="text-[#dbdbdb] text-xl sm:mt-2.5 sm:ml-12.5 font-extralight list-disc list-outside max-sm:text-sm max-sm:ml-10">
                            <li>Data Structures & Algorithms</li>
                            <li>Web Development</li>
                            <li>Designing visual content</li>
                            <li>Exploring open-source tools and Linux</li>
                        </ul>
                    </div>

                    <div className="bg-[#ffffff0d] rounded-4xl h-62.5 lg:w-150 border border-[#3a3939] backdrop-blur-md md:w-100 max-sm:w-80 max-sm:h-55 max-sm:rounded-2xl">
                        <h4 className="text-[#F6AD76] sm:mt-2.5 sm:ml-7.5 text-3xl max-sm:text-xl max-sm:mt-0.5 max-sm:ml-20">My Goals :</h4>
                        <div className="border-0 border-t-2 border-t-[rgb(58,57,57)] my-2.5 mx-7.5 max-sm:my-0.5"></div>
                        <ul className="text-[#dbdbdb] text-xl sm:mt-2.5 sm:ml-12.5 font-extralight list-disc list-outside max-sm:text-sm max-sm:ml-10">
                            <li>Participate in competitions and hackathons</li>
                            <li>Contribute to real-world projects</li>
                            <li>Improve problem-solving and DSA skills</li>
                            <li>Become a well-rounded engineer who builds and
                                defends systems</li>
                        </ul>
                    </div>
                </div>
            </div >
        </>
    )
}

export default About;
