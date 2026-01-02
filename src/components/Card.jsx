
function Card({ image, issuer, description, link }) {
    return (
        <>
            <div className="h-100 w-70 rounded-3xl relative shadow-[0px_2px_10px_#00000066] flex flex-col  transition duration-100 ease-in rotating-card bg-white max-sm:mb-10">
                <div className="h-[50%] w-full rounded-t-3xl overflow-hidden">
                    <img src={image} alt="hackathon image" className="box-content" />
                </div>

                <div className="h-[50%] w-full rounded-3xl bg-[#f3f3f3] shadow-[0_-6px_20px_-8px_#00000080] flex flex-col items-center  ">
                    <h3 className="text-[#555] text-2xl font-semibold text-center mt-2">Issued by <span className="text-[#f97316] font-bold">{issuer}</span></h3>

                    <p className="text-center text-black font-light mt-2">{description}</p>

                    <button className="bg-[#f97316] text-white text-sm rounded-md py-2 px-4 cursor-pointer absolute bottom-3  hover:bg-[#ce5f11] transition duration-150 ease-in" onClick={() => window.open(link, "_blank")}>View Certificate</button>
                </div>
            </div>
        </>
    )
}

export default Card;
