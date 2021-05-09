import SectionTitle from "../SectionTitle/SectionTitle";
import missaelxp from '../../assets/img/missaelxp.png';

const AboutMe = () => {
    return (
        <div className="container mt-6">
            <div className="columns">
                <div className="column">
                    <SectionTitle text={"about me"} />
                    <p className={"block"}>Hi, welcome to my virtual home. My name is <strong className={"has-text-primary"}>Missael</strong>. I'm a software engineer based in Mexico.</p>
                    <p className={"block"}>I really love programming, I'm a Javascript lover but I've tried many technologies. I like to look up for the technology that fits best for every project.</p>
                    <p className="block">

                    </p>
                </div>
                <div className="column is-two-fifths">
                    <img src={missaelxp}/>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;