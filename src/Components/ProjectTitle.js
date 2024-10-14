const ProjectTitle = (props) => {
    return (
        <a className="proj-name" href={props.href} target="_blank" rel="noreferrer">
            {props.name}
        </a>
    )
}

export default ProjectTitle;