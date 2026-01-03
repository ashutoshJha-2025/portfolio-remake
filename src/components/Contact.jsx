import mailIcon from "../assets/mail.svg"
import githubIcon from "../assets/github_logo.png"
import leetcodeIcon from "../assets/leetcode_logo.png"
import linkedinIcon from "../assets/linkedin_logo.png"
import arrow_img from "../assets/arrow.svg";



function Contact() {
    const resume = `${process.env.PUBLIC_URL}/resume.pdf`

    return (
        <>
            <div id="contact" className="w-screen h-screen relative max-sm:h-[210%]">
                <div className="absolute top-2.5 left-5 flex flex-col items-center max-md:top-10 max-sm:top-220">
                    <h3 className="text-[#f37329] text-5xl font-semibold max-lg:text-4xl max-md:text-3xl">Resume</h3>
                    <button className="bg-[#0FA673] text-white py-1.5 px-2.5 rounded-lg text-md max-md:text-sm font-medium cursor-pointer hover:bg-[#0c8e60] transition-all duration-150 ease-in" onClick={() => window.open(resume, "_blank")}>📄 View Resume</button>
                </div>

                <div className="flex flex-col items-center  absolute top-20 left-1/2 -translate-x-1/2 max-sm:top-250">
                    <h1 className="font-semibold text-[40px] text-center text-[#2d2e32] max-lg:text-3xl max-sm:text-2xl">Have an Awesome Project <br />Idea? <span className="text-[#f37329] ">Let’s Discuss</span></h1>

                    <div className="flex ">
                        <div className="bg-[#f5f5f5] shadow-lg flex px-7 py-2 rounded-[40px] justify-between gap-3">
                            <div className="w-10 h-10 bg-[#EF925C] rounded-full flex justify-center items-center"><img src={mailIcon} alt="mail icon" className="w-8" /></div>
                            <input type="email" placeholder="Enter Email Address" className="w-70 text-lg focus:outline-none max-sm:w-40" />
                        </div>
                        <button className="bg-[#f37329] text-white py-1 px-6 rounded-[40px] cursor-pointer text-xl hover:bg-[#d85f19] transition-all duration-150 ease-in" type="submit">Send</button>
                    </div>
                </div>

                <div className="bg-[#1e1e1e] absolute bottom-0 w-[99%] h-[45%] rounded-t-4xl flex items-center gap-4 justify-around max-sm:h-[35vh]">
                    <div className="flex flex-col gap-2">
                        <h4 className="text-[#d85f19] font-medium text-lg">Let’s connect here</h4>

                        <div className="flex flex-col gap-3">

                            {/* github link */}
                            <div id="main-div" className="group flex items-center cursor-pointer " onClick={() => window.open("https://github.com/ashutoshJha-2025", "_blank")}>
                                <span className=" text-white font-normal bg-white/10 rounded-2xl px-2 py-1 w-30 ">Github</span>
                                <div id="img-div" className="-ml-8 bg-[#b44606] rounded-full w-10 h-10 relative group-hover:bg-[#07724e] transition-all duration-180 ease-in">
                                    <img src={githubIcon} alt="github_logo.png" className=" w-50 box-content absolute top-2 right-0  group-hover:opacity-0 transition-opacity duration-150 ease-out" />
                                    <img src={arrow_img} alt="github-hover" className=" w-9 box-content absolute top-0.5 right-0.5  opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in" />
                                </div>
                            </div>

                            {/* leetcode link */}
                            <div className="group flex items-center cursor-pointer" onClick={() => window.open("https://leetcode.com/u/Ashutosh054/", "_blank")}>
                                <span className=" text-white font-normal bg-white/10 rounded-2xl px-2 py-1 w-30 ">Leetcode</span>
                                <div className="-ml-8 bg-[#b44606] rounded-full w-10 h-10 relative group-hover:bg-[#07724e] transition-all duration-180 ease-in">
                                    <img src={leetcodeIcon} alt="github_logo.png" className=" w-6 box-content rounded-lg absolute top-2 right-2 group-hover:opacity-0 transition-opacity duration-150 ease-out" />
                                    <img src={arrow_img} alt="github-hover" className=" w-9 box-content absolute top-0.5 right-0.5  opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in" />
                                </div>
                            </div>

                            {/* linkedin link */}
                            <div className="group flex items-center cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/ashutosh-jha-68a525340/", "_blank")}>
                                <span className=" text-white font-normal bg-white/10 rounded-2xl px-2 py-1 w-30">LinkedIn</span>
                                <div className="-ml-8 bg-[#b44606] rounded-full w-10 h-10 relative group-hover:bg-[#07724e] transition-all duration-180 ease-in ">
                                    <img src={linkedinIcon} alt="github_logo.png" className=" w-6 box-content absolute top-2 right-2 group-hover:opacity-0 transition-opacity duration-150 ease-out" />
                                    <img src={arrow_img} alt="github-hover" className=" w-9 box-content absolute top-0.5 right-0.5  opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col gap-2 max-sm:hidden">
                        <h4 className="text-[#d85f19] font-medium text-lg">Navigation</h4>

                        <ul className="text-white text-sm font-normal flex flex-col gap-1">
                            <li className="cursor-pointer  hover:bg-white/10 py-1 text-center rounded-xl  transition duration-150 ease-in">Home</li>
                            <li className="cursor-pointer  hover:bg-white/10 py-1 text-center rounded-xl  transition duration-150 ease-in">About</li>
                            <li className="cursor-pointer  hover:bg-white/10 py-1 text-center rounded-xl  transition duration-150 ease-in">Skills</li>
                            <li className="cursor-pointer  hover:bg-white/10 py-1 text-center rounded-xl  transition duration-150 ease-in">Projects</li>
                            <li className="cursor-pointer  hover:bg-white/10 py-1 text-center rounded-xl  transition duration-150 ease-in">Certificates</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-2 max-md:hidden" id="phone-id">
                        <h4 className="text-[#d85f19] font-medium text-lg">Contact</h4>

                        <ul className="text-white text-sm font-normal flex flex-col gap-1">
                            <li className="mb-1">📞 +91 9323482749</li>
                            <li className="mb-1">📧 jhaashutosh0811@gmail.com</li>
                        </ul>
                    </div>

                    <div className="flex flex-col relative h-50 w-70 max-sm:hidden" id="feedback ">
                        <h4 className="text-white font-semibold mb-2.5">Send your feedback or message</h4>
                        <input type="text" placeholder="your name.. (optional)" className="w-full h-9 rounded-lg py-2 px-3 text-sm mb-2 bg-white focus:outline-none" />
                        <input type="text" placeholder="Write your message here.." requi className="w-full min-h-15 rounded-lg  p-3 text-sm mb-5 bg-white focus:outline-none" />
                        <button type="submit" className="bg-[#f37329] absolute right-0 bottom-4 text-white rounded-lg py-0.5 px-5 cursor-pointer text-lg text-center hover:bg-[#d85f19] transition-all duration-150 ease-in">send</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
