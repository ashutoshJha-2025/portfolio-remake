import Card from "./Card";
import unstop from "../assets/unstop hackathon.png";
import java from "../assets/java completion.png";
import adobe from "../assets/adobe india.png";
import python from "../assets/python course.png";

function Certificates() {
    const javaCert = "public/java_certificate.pdf"
    const unstopCert = "public/unstop_certificate.pdf"
    const adobeCert = "public/adobe_certificate.pdf"
    const pythonCert = "public/python_course.pdf"
    return (
        <>
            <div id="certificates" className="relative h-screen w-screen max-sm:h-[150%]">

                <div className="flex text-white lg:text-6xl font-semibold absolute sm:top-20 left-1/2 -translate-x-1/2 md:text-4xl max-sm:top-10 max-sm:text-3xl">
                    <h1 className="text-[#f37329]">Certificates</h1>
                </div>

                <div className="flex h-auto w-[95%] absolute md:bottom-10 left-1/2 -translate-x-1/2 items-center justify-around  max-md:flex-wrap max-md:bottom-0 max-md:top-30">
                    <Card
                        image={unstop}
                        issuer="Unstop"
                        description="Participated in an individual online hackathon of AlgoQuiz -DSA MCQ"
                        link={unstopCert}
                    />
                    <Card
                        image={java}
                        issuer="IIT Bombay"
                        description="Completed a course covering Java fundamentals, OOP concepts."
                        link={javaCert}
                    />
                    <Card
                        image={adobe}
                        issuer="Adobe India"
                        description="Participated in the Adobe India Hackathon"
                        link={adobeCert}
                    />
                    <Card
                        image={python}
                        issuer="Scaler"
                        description="Completed a beginner-level Python course covering core syntax, data types, and basic problem-solving concepts."
                        link={pythonCert}
                    />

                </div>

            </div>
        </>
    )
}

export default Certificates;
