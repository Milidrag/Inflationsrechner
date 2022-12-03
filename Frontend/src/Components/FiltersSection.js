import '../App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function FiltersSection() {
    const [superCategory, setSuperCategory] = useState([]);
    const [category, setCategory] = useState();
    const [product, setProduct] = useState();

    const [selectedSupCategory, setSelectedSupCategory] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedProduct, setSelectedProduct] = useState("");

    const onChangeSuperCategory = (event) => {
        const value = event.target.value;
        setSelectedSupCategory(value);
    };
    const onChangeCategory = (event) => {
        const value = event.target.value;
        setSelectedCategory(value);
    };

    const onChangeProduct = (event) => {
        const value = event.target.value;
        setSelectedProduct(value);
    };

    useEffect(() => {
        axios.get('http://localhost:8080/pbc/super-categories').then((response) => {
            setSuperCategory(response.data);
            console.log(response.data)
        });
        axios.get('http://localhost:8080/pbc/categories').then((res) => {
            setCategory(res.data);
            console.log(res.data)
        });
        axios.get('http://localhost:8080/pbc/products').then((res) => {
            setProduct(res.data);
            console.log(res.data)
        });
    }, []);

    return (
        <section className='bg-tahiti grid grid-cols-7'>
            <div className="py-6 self-center md:col-start-3 md:col-span-3 col-start-2 col-span-5">
                <h4 className="mb-10 mt-4 text-2xl font-extrabold text-green">Schaue dir mal Inflationsrate auf deine
                    Lieblingslebensmittel</h4>
                <p className='mb-6'>Mit unserem Filter kannst du dir die Inflationsentwicklung nicht nur für einzelne
                    Produkte sowie auch
                    für Kategorien der Lebensmittel anzeigen lassen</p>
                <div>
                    {superCategory &&
                    <select id="super-categories"
                            defaultValue={'DEFAULT'}
                            onChange={onChangeSuperCategory}
                            className="block w-full p-2 mb-6 text-green border border-green rounded-lg bg-transparent">
                        <option value="DEFAULT" disabled={true}>Supercategorie</option>
                        {superCategory.map((data) => (
                            <option value={data.scatName} key={data.scatId}>{data.scatName}</option>
                        ))}
                    </select>
                    }
                    {category &&
                    <select id="categories"
                            defaultValue={'DEFAULT'}
                            onChange={onChangeCategory}
                            className="block w-full p-2 mb-6 text-green border border-green rounded-lg bg-transparent">
                        <option value="DEFAULT" disabled={true}>Categorie</option>
                        {selectedSupCategory ?
                        category.map(({catId, catName, catScat}) => (
                            catScat.scatName === selectedSupCategory &&
                                (<option value={catName} key={catId}>{catName}</option>)
                            )):category.map(({catId, catName}) => (
                                <option value={catName} key={catId}>{catName}</option>
                            ))
                        }
                    </select>
                    }
                    {product &&
                    <select id="products"
                            defaultValue={'DEFAULT'}
                            onChange={onChangeProduct}
                            className="block w-full p-2 mb-6 text-green border border-green rounded-lg bg-transparent">
                        <option value="DEFAULT" disabled={true}>Product</option>
                        {selectedSupCategory?
                            product.map(({prodId, prodName, prodScat}) => (
                                prodScat.scatName===selectedSupCategory &&
                                (<option value={prodName} key={prodId}>{prodName}</option>)
                            )): selectedCategory?
                            product.map(({prodId, prodName, prodCat}) => (
                                prodCat.catName===selectedCategory &&(
                                    <option value={prodName} key={prodId}>{prodName}</option>
                                )
                            )):product.map(({prodId, prodName}) => (
                                    <option value={prodName} key={prodId}>{prodName}</option>
                                ))
                        }
                    </select>
                    }
                    <button
                        className="inline-flex justify-center items-center mt-6 py-3 px-5 text-base font-medium text-center text-light-gray rounded-lg bg-green hover:bg-light-gray hover:text-green" >
                        Filter anwenden
                    </button>
                    <p>{selectedSupCategory}</p>
                    <p>{selectedCategory}</p>
                </div>
            </div>
        </section>
    )
}

export default FiltersSection;