import "./SectionTitle.css";

const SectionTitle = (props) => {
    return (
        <h2
            className="sectionTitle has-text-primary title is-4">{props.text}</h2>
    )
}

export default SectionTitle;