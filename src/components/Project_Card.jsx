import arrow_img from "../assets/arrow.svg";


function Project_Card({ heading, contentImg, link }) {
    return (
        <>
            <div id="container" className="h-100 w-88 rounded-4xl bg-[#ffffff0d] border border-[#3a3939] backdrop-blur-md relative max-md:h-70 max-md:w-70 max-sm:mb-8">
                <h1 className="font-semibold text-4xl text-center text-white p-2 max-sm:text-2xl max-md:text-3xl">{heading}</h1>

                <div className="border-0 border-t-2 border-t-[rgb(58,57,57)]"></div>

                <div className="absolute bottom-0 h-[62.5%] w-full rounded-4xl bg-[#E3D7CF]">
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-4 h-full w-[90%] rounded-4xl bg-[#ffffff4d] backdrop-blur-md -z-1">  </div>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-8 h-full w-[80%] rounded-4xl bg-[#0000001a] backdrop-blur-md -z-5"></div>

                    <img src={contentImg} alt="project img" className="absolute left-1/2 -translate-x-1/2 h-full w-full rounded-4xl p-2 shadow-lg shadow-[#836f60]/50"/>
                </div>

                <div className="rounded-full w-18 h-18 absolute -bottom-4 -right-4 bg-[#263752] flex justify-center items-center cursor-pointer hover:bg-[#1a2431] transition-all duration-300ms ease-in"
                    onClick={() => window.open(link, "_blank")}>
                    <img src={arrow_img} alt="arrowmig" className="w-15" />
                </div>
            </div>
        </>
    )
}

export default Project_Card;
