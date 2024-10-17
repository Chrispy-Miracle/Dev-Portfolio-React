const ProjectImage = (props) => {
    return (
        <div className="proj-image-container">        
            {(props.imageType === "iframe") && 
                <iframe 
                    id={`${props.id}-vid` }
                    className="project-vids"
                    src={props.src} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
            }
{/* className="proj-pic-link" */}
            {(props.imageType === "img") && 
                <a  href={props.href} target="_blank" rel="noreferrer">
                    <img className="project-pics" src={props.src} alt={props.alt} />
                </a>
            }
        </div>
    )
}

export default ProjectImage;