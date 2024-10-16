const ContactLink = (props) => {
    return (
        <a id={props.id}  href={props.href} target="_blank" rel="noreferrer" alt={props.alt} title={props.tooltip}>
            <h2 className="links">{props.text}</h2>
        </a>
    )
}

export default ContactLink;