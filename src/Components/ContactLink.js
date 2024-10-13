const ContactLink = (props) => {
    return (
        <a id={props.id} class="links" href={props.href} target="_blank" alt={props.alt} title={props.tooltip}>
            {props.text}
        </a>
    )
}

export default ContactLink;