import ProjectTitle from "./ProjectTitle";
import ProjectBlurb from "./ProjectBlurb";
import ProjectImage from "./ProjectImage";

const ProjectTile = (props) => {
    return (
        <div id="plant-it" class="project-tile">
            <ProjectTitle href={props.href} name={props.name} />
            <br />
            <ProjectBlurb blurb={props.blurb} />
            <ProjectImage type={props.type} src={props.src}/>
        </div>
    )
}

export default ProjectTile;