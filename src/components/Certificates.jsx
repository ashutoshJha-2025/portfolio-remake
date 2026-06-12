import Card from "./Card";

function Certificates() {
    const javaCert = `/java_certificate.pdf`
    const unstopCert = `/unstop_certificate.pdf`
    const adobeCert = `/adobe_certificate.pdf`
    const pythonCert = `/python_course.pdf`
    const udemyCert = `/udemy_course.pdf`
    const ctfCert = `/kjsse_ctf.pdf`

    const certificates = [
        {
            image: "https://ik.imagekit.io/ashutosh054/Portfolio/Screenshot%202026-06-12%20135036.png?updatedAt=1781252492060",
            issuer: "Udemy",
            description: "Completed web development course.",
            link: `https://ashutoshjha-2025.github.io/portfolio-remake${udemyCert}`
        },
        {
            image: "https://ik.imagekit.io/ashutosh054/Portfolio/Screenshot%202026-06-12%20135109.png?updatedAt=1781252492027",
            issuer: "KJSSE CTF 3.0",
            description: "Participated in an capture the flag cybersecurity competition organized by KJSSE.",
            link: `https://ashutoshjha-2025.github.io/portfolio-remake${ctfCert}`
        },
        {
            image: "https://ik.imagekit.io/ashutosh054/Portfolio/unstop%20hackathon.png?updatedAt=1781239730216",
            issuer: "Unstop",
            description: "Participated in an individual online hackathon of AlgoQuiz-DSA MCQ.",
            link: `https://ashutoshjha-2025.github.io/portfolio-remake${unstopCert}`
        },
        {
            image: "https://ik.imagekit.io/ashutosh054/Portfolio/java%20completion.png?updatedAt=1781239730209",
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
                    <Card
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