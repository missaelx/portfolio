import "./SectionTitle.css";

const SectionTitle = (props) => {
    let classes = "sectionTitle has-text-primary title is-4 " + props.className;
    return (
        <h2
            className={classes}>{props.text}</h2>
    )
}

export default SectionTitle;