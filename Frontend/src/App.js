import './App.css';
import {useState} from "react";
import axios from "axios";

function App() {
    const [product, setProduct] = useState(null);
    function createPost() {
        axios
            .post('//localhost:8080/pbc/super-category?name=Kleidung')
            .then((response) => {
                setProduct(response.data);
            });
    }
    if (!product) return (
        <>
            <button onClick={createPost} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Button
            </button>
            <p>No product!</p>
        </>)

    return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
        <button onClick={createPost} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Button
        </button>
    </div>
  );
}

export default App;
