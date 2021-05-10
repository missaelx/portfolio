import logo from "../../../assets/img/musik.png";
import ss from "../../../assets/img/ss/musik_ss.png";
import playstore from "../../../assets/img/google-play-badge.png";
import appstore from "../../../assets/img/appstore-badge.svg";

const Musik = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-two-thirds">
                        <img src={ss} alt="Login screenshot of Varaapp"/>
                    </div>
                    <div className="column content has-text-centered">
                        <h3 className={"title is-3 has-text-white has-text-centered"}>Circle of fifths</h3>
                        <img src={logo} alt="Circle of fifths logo" style={{maxWidth: "200px"}}/>
                        <p>This App is an interactive tool that allows you to visualize and listen to the relationship between the circle, the staff and the piano.</p>
                        <div className={"columns"}>
                            <div className="column">
                                <a href="https://apps.apple.com/mx/app/circle-of-fifths-music-theory/id1512623838?l=en" className={"image"} >
                                    <img src={appstore} alt="" style={{height: "40px", width: "auto", margin: "0 auto"}}/>
                                </a>

                            </div>
                            <div className="column">
                                <a href="https://play.google.com/store/apps/details?id=dev.missael.circulodequintas&hl=es_MX&gl=US" className={"image"}>
                                    <img src={playstore} alt="" style={{height: "38px", width: "auto", margin: "0 auto", imageOrientation: "none"}}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Musik;