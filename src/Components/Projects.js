import '../Styles/Projects.css';
import ProjectTile from "./ProjectTile";
import { myProjects } from "../data/myProjects";

const Projects = () => {
    return (
        <section id="Projects">
            <h2 id="proj-label" >A Few of My Projects:</h2>
            <div id="project-container">
                {myProjects.map(project => 
                    <ProjectTile 
                        id={project.id}
                        key={`${project.id}-key`}
                        href={project.href}
                        name={project.name}
                        blurb={project.blurb}
                        imageType={project.imageType}
                        src={project.src}
                        alt={project.alt}
                    />
                )}
            </div>
        </section>
    )
}

export default Projects;