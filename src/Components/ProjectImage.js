const ProjectImage = (props) => {
    return (
        <>        
            {(props.imageType == "iframe") && 
                <iframe 
                    id={`${props.id}-vid` }
                    class="project-vids"
                    src={props.src} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            }

            {(props.imageType == "img") && 
                <a href={props.href} target="_blank">
                    <img class="project-pics" src={props.src} alt={props.alt} />
                </a>
            }


        </>

        
    )
}

export default ProjectImage;