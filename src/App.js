import './App.sass';
import Hero from "./components/Hero";
import Navbar from "./components/Nabvar/Navbar";
function App() {
  return (
    <div className="App">
        <Navbar
            navigationLinks={[
                {
                    href: "#",
                    label: "about me"
                },{
                    href: "#",
                    label: "experience"
                },{
                    href: "#",
                    label: "project"
                },{
                    href: "#",
                    label: "get in touch"
                },
            ]}
            actionLinks={[
                {
                    onClick: () => alert("downloading resume"),
                    label: "Resume",
                    type: "link"
                }
            ]}
        />
        <Hero/>

        {/*<section className="section">*/}
        {/*    <div className="container">*/}
        {/*        <h1 className="title">*/}
        {/*            Hello World*/}
        {/*        </h1>*/}
        {/*        <p className="subtitle">*/}
        {/*            My first website with <strong>Bulma</strong>!*/}
        {/*        </p>*/}

        {/*    </div>*/}
        {/*</section>*/}
    </div>
  );
}

export default App;
