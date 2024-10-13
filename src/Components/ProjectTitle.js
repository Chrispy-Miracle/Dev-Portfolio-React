const ProjectTitle = (props) => {
    return (
        <a class="proj-name" href={props.href} target="_blank">
            {props.name}
        </a>
    )
}

export default ProjectTitle;