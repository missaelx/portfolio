import logo from '../../../assets/img/varaapp.png';
import ss_login from '../../../assets/img/ss/varaapp_ss_login.png';

const Varaapp = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column content has-text-centered">
                        <h3 className={"title is-3 has-text-white has-text-centered"}>Varaapp</h3>
                        <img src={logo} alt="Varaapp logo" style={{maxWidth: "200px"}}/>
                        <p>App for register information of stranded animals conforming the Protocol for registration of stranded marine mammals of SOMEMMA</p>
                        <p><small>Currently in revision process by Universidad Veracruzana</small></p>
                    </div>
                    <div className="column">
                        <img src={ss_login} alt="Login screenshot of Varaapp"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Varaapp;