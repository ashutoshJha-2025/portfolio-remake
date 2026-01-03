import background_image from "../assets/bg_image.webp";
import Project_Card from "./Project_Card";
import DSA_project from "../assets/DSA_Java_Projects.png";
import Web_project from "../assets/web_project.png";
import Design_project from "../assets/thumbnail_project.png";


function Projects() {
    return (
        <>
            <div id="projects" className="relative h-screen w-screen bg-cover bg-center bg-no-repeat rounded-4xl shadow-[0_-10px_30px_0_rgba(17,17,17,0.9)] max-sm:h-[150%]" style={{ backgroundImage: `url(${background_image})` }}>

                <div className="flex gap-3 text-white lg:text-6xl font-semibold absolute sm:top-20 left-1/2 -translate-x-1/2 md:text-4xl max-sm:top-5 max-sm:text-3xl">
                    <h1>My</h1>
                    <h1 className="text-[#f37329]">Projects</h1>
                </div>

                <div id="project-container" className="flex h-auto w-[95%] absolute md:bottom-10 left-1/2 -translate-x-1/2 items-center justify-around  max-md:flex-wrap max-md:bottom-0">
                    <Project_Card
                        heading="DSA"
                        contentImg={DSA_project}
                        link="https://github.com/ashutoshJha-2025/DSA-Projects-in-java"
                    />
                    <Project_Card
                        heading="Web Development"
                        contentImg={Web_project}
                        link="https://github.com/ashutoshJha-2025/Frontend-Projects"
                    />
                    <Project_Card
                        heading="Visual Designs"
                        contentImg={Design_project}
                        link="https://ashutoshjha-2025.github.io/Thumbnail_Designs/"
                    />
                </div>

            </div>
        </>
    )
}

export default Projects;
