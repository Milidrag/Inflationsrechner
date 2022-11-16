import './App.css';
import Header from "./Components/Header";
import IntroSection from "./Components/IntroSection";
import FiltersSection from "./Components/FiltersSection";

function App() {
    return (
    <div className="App">
        <Header></Header>
        <IntroSection></IntroSection>
        <FiltersSection></FiltersSection>
     {/*   <button onClick={onClick}>Click</button>
        {superCategory &&
        <>{superCategory.map(({scatId, scatName}) => (
            <p key={scatId}>Supercategory with the name: {scatName}</p>
        ))}</>
        }*/}
    </div>
  );
}

export default App;
