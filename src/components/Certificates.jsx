import ctfBgImage from '../assets/ctfCertificate.png'
import udemyBgImage from '../assets/udemyCertificate.png'
import unstopBgImage from '../assets/unstopCertificate.png'
import javaBgImage from '../assets/javaCertificate.png'

function CertificateCard({ image, issuer, description, link }) {
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

function Certificates() {
    const javaCert = `/java_certificate.pdf`
    const unstopCert = `/unstop_certificate.pdf`
    const udemyCert = `/udemy_course.pdf`
    const ctfCert = `/kjsse_ctf.pdf`

    const certificates = [
        {
            image: udemyBgImage,
            issuer: "Udemy",
            description: "Completed web development course.",
            link: `https://ashutoshjha-2025.github.io/portfolio-remake${udemyCert}`
        },
        {
            image: ctfBgImage,
            issuer: "KJSSE CTF 3.0",
            description: "Participated in an capture the flag cybersecurity competition organized by KJSSE.",
            link: `https://ashutoshjha-2025.github.io/portfolio-remake${ctfCert}`
        },
        {
            image: unstopBgImage,
            issuer: "Unstop",
            description: "Participated in an individual online hackathon of AlgoQuiz-DSA MCQ.",
            link: `https://ashutoshjha-2025.github.io/portfolio-remake${unstopCert}`
        },
        {
            image: javaBgImage,
            issuer: "IIT Bombay",
            description: "Completed a course covering Java fundamentals, OOP concepts.",
            link: `https://ashutoshjha-2025.github.io/portfolio-remake${javaCert}`
        },
    ];

    return (
        <div id="certificates" className="w-screen min-h-screen flex flex-col items-center py-16 px-4">

            <h1 className="text-5xl md:text-6xl font-semibold mb-12 text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
                Certificates
            </h1>

            <div className=" flex h-auto w-[95%] items-center justify-around  max-md:flex-wrap">
                {certificates.map((job, i) => (
                    <CertificateCard
                        key={i}
                        image={job.image}
                        issuer={job.issuer}
                        description={job.description}
                        link={job.link}
                    />
                ))}
            </div>

        </div>
    );
}

export default Certificates;