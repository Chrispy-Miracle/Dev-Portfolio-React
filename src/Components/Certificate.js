const Certificate = (props) => {
    return (
        <a id={props.id} target="_blank" 
            href={props.href}>
            <img id={`${props.id}-cert`} class="certs" src={props.src} alt={props.alt} />
        </a>  
    )
}

export default Certificate;