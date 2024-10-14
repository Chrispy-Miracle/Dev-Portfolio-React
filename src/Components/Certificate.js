const Certificate = (props) => {
    return (
        <a 
            id={props.id} 
            target="_blank" 
            rel="noreferrer"
            href={props.href}
        >
            <img 
                id={`${props.id}-cert`} 
                className="certs" 
                src={props.src} 
                alt={props.alt} 
            />
        </a>  
    )
}

export default Certificate;