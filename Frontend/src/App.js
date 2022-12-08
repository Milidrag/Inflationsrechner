import './App.css';
import Header from "./Components/Header";
import IntroSection from "./Components/IntroSection";
import FilterSection from "./Components/FilterSection";
import Contact from "./Components/Contact";

function App() {
    return (
    <div className="App">
        <Header></Header>
        <IntroSection></IntroSection>
        <FilterSection></FilterSection>
        <Contact></Contact>
    </div>
  );
}

export default App;
