const ContactLink = (props) => {
    return (
        <a id={props.id} className="links" href={props.href} target="_blank" rel="noreferrer" alt={props.alt} title={props.tooltip}>
            {props.text}
        </a>
    )
}

export default ContactLink;