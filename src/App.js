import './App.sass';
import Home from "./containers/Home";
import {ScrollingProvider} from 'react-scroll-section';

function App() {
    return (
        <ScrollingProvider scrollBehavior={"smooth"}>
            <Home />
        </ScrollingProvider>
    );
}

export default App;
