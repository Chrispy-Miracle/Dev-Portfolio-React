import ProjectTitle from "./ProjectTitle";
import ProjectBlurb from "./ProjectBlurb";
import ProjectImage from "./ProjectImage";

const ProjectTile = (props) => {
    return (
        <div id={props.id} className="project-tile">
            <div className="name-blurb-container">
                <ProjectTitle 
                    href={props.href}
                    name={props.name} 
                />
                <ProjectBlurb 
                    blurb={props.blurb}
                />
            </div>
            <ProjectImage 
                id={props.id} 
                imageType={props.imageType} 
                src={props.src} 
                href={props.href} 
                alt={props.alt} 
            />                
        </div>
    )
}

export default ProjectTile;