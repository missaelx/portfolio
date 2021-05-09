
const ExperienceCard = (props) => {
    return (
        <div className="card is-dark">
            <div className="card-content">
                <div className={"content"}>
                    <h4 className="title is-6">{props.company} <small>{props.period}</small></h4>
                    <p><strong>{props.position}</strong></p>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default ExperienceCard;