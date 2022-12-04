import '../App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import PriceDevCards from "./PriceDevCards";

function FiltersSection() {
    const [superCategory, setSuperCategory] = useState();
    const [category, setCategory] = useState();
    const [product, setProduct] = useState();

    const [filtersApplied, setFiltersApplied] = useState({
        superCategoryFilersApplied: false,
        categoryFiltersApplied: false,
        productFiltersApplied: false
    });

    const [selectedSupCategory, setSelectedSupCategory] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedProduct, setSelectedProduct] = useState("");

    const resetFilters = (e) => {
        e.preventDefault();
        setSelectedSupCategory("");
        setSelectedCategory("");
        setSelectedProduct("");
    }

    const showPriceDevelopment = (e) => {
        e.preventDefault();
        if (selectedSupCategory) {
            superCategory.map((data) => (
                (data.scatName === selectedSupCategory &&
                    setFiltersApplied(prev => ({...prev, superCategoryFilersApplied: true})))
            ))
        } else if (selectedCategory) {
            category.map((data) => (
                (data.catName === selectedCategory &&
                    setFiltersApplied(prev => ({...prev, categoryFiltersApplied: true})))
            ))
        } else if (selectedProduct) {
            product.map((data) => (
                (data.prodName === selectedProduct &&
                    setFiltersApplied(prev => ({...prev, productFiltersApplied: true})))
            ))
        } else {
            setFiltersApplied(prev => ({...prev, productFiltersApplied: false}));
            setFiltersApplied(prev => ({...prev, categoryFiltersApplied: false}));
            setFiltersApplied(prev => ({...prev, superCategoryFilersApplied: false}));
        }
    }

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
        <>
            <section className='bg-tahiti grid grid-cols-7'>
                <div className="py-6 self-center md:col-start-3 md:col-span-3 col-start-2 col-span-5">
                    <h4 className="mb-10 mt-4 text-2xl font-extrabold text-green">Schaue dir mal Inflationsrate auf
                        deine
                        Lieblingslebensmittel</h4>
                    <p className='mb-6'>Mit unserem Filter kannst du dir die Inflationsentwicklung nicht nur für
                        einzelne
                        Produkte sowie auch
                        für Kategorien der Lebensmittel anzeigen lassen</p>
                    <div>
                        <h4 className="mb-5 mt-4 text-l font-bold text-left text-green">Superkategorie</h4>
                        {superCategory &&
                        <select id="super-categories"
                                value={selectedSupCategory}
                                onChange={onChangeSuperCategory}
                                className="block w-full p-2 mb-6 text-green border border-green rounded-lg bg-transparent">
                            <option value="DEFAULT" disabled={true}>Superkategorie</option>
                            {selectedCategory ?
                                category.map(({catName, catScat}) => (
                                    catName === selectedCategory &&
                                    (
                                        <option value={catScat.scatName}
                                                key={catScat.scatId}>{catScat.scatName}</option>
                                    )
                                )) : selectedProduct ?
                                    product.map(({prodScat, prodName}) => (
                                        prodName === selectedProduct && (
                                            <option value={prodScat.scatName}
                                                    key={prodScat.scatId}>{prodScat.scatName}</option>
                                        )
                                    )) :
                                    superCategory.map((data) => (
                                        <option value={data.scatName} key={data.scatId}>{data.scatName}</option>
                                    ))}
                        </select>
                        }
                        <h4 className="mb-5 mt-4 text-l font-bold text-left text-green">Kategorie</h4>
                        {category &&
                        <select id="categories"
                                value={selectedCategory}
                                onChange={onChangeCategory}
                                className="block w-full p-2 mb-6 text-green border border-green rounded-lg bg-transparent">
                            <option value="DEFAULT" disabled={true}>Kategorie</option>
                            {selectedSupCategory ?
                                category.map(({catId, catName, catScat}) => (
                                    catScat.scatName === selectedSupCategory &&
                                    (<option value={catName} key={catId}>{catName}</option>)
                                )) : selectedProduct ?
                                    product.map(({prodCat, prodName}) => (
                                        prodName === selectedProduct && (
                                            <option value={prodCat.catName}
                                                    key={prodCat.catId}>{prodCat.catName}</option>
                                        )
                                    )) :
                                    category.map(({catId, catName}) => (
                                        <option value={catName} key={catId}>{catName}</option>
                                    ))
                            }
                        </select>
                        }
                        <h4 className="mb-5 mt-4 text-l font-bold text-left text-green">Produkt</h4>
                        {product &&
                        <select id="products"
                                value={selectedProduct}
                                onChange={onChangeProduct}
                                className="block w-full p-2 mb-6 text-green border border-green rounded-lg bg-transparent">
                            <option value="DEFAULT" disabled={true}>Produkt</option>
                            {selectedSupCategory ?
                                product.map(({prodId, prodName, prodScat}) => (
                                    prodScat.scatName === selectedSupCategory &&
                                    (<option value={prodName} key={prodId}>{prodName}</option>)
                                )) : selectedCategory ?
                                    product.map(({prodId, prodName, prodCat}) => (
                                        prodCat.catName === selectedCategory && (
                                            <option value={prodName} key={prodId}>{prodName}</option>
                                        )
                                    )) : product.map(({prodId, prodName}) => (
                                        <option value={prodName} key={prodId}>{prodName}</option>
                                    ))
                            }
                        </select>
                        }
                        {filtersApplied.superCategoryFilersApplied &&
                        superCategory.map((data) => (
                            data.scatName === selectedSupCategory && (
                                <PriceDevCards category="Superkategorie"
                                               name={data.scatName}
                                               key={data.scatId}
                                               inflationAugust={data.scatInflAug}
                                               inflationJuly={data.scatInflJul}
                                               inflationdifference={data.scatInflChangeAug}/>
                            )
                        ))
                        }
                        {filtersApplied.categoryFiltersApplied &&
                        category.map((data) => (
                            data.catName === selectedCategory && (
                                <PriceDevCards category="Kategorie"
                                               name={data.catName}
                                               key={data.catId}
                                               inflationAugust={data.catInflAug}
                                               inflationJuly={data.catInflJul}
                                               inflationdifference={data.catInflChangeAug}/>
                            )
                        ))
                        }
                        {filtersApplied.productFiltersApplied &&
                        product.map((data) => (
                            data.prodName === selectedProduct && (
                                <PriceDevCards category="Produkt"
                                               name={data.prodName}
                                               key={data.prodId}
                                               inflationAugust={data.prodInflAug}
                                               inflationJuly={data.prodInflJul}
                                               inflationdifference={data.prodInflChangeAug}/>
                            )
                        ))
                        }
                        <div>
                            <button
                                className="inline-flex justify-center items-center mt-6 py-3 px-8 mx-3 text-base border-2 border-green font-medium text-center text-light-gray rounded-lg bg-green hover:bg-light-green hover:text-light-gray hover:border-light-green"
                                onClick={showPriceDevelopment}>
                                Filter anwenden
                            </button>
                            <button
                                className="inline-flex justify-center items-center mt-6 py-3 px-5 mx-3 text-base border-2 border-green font-medium text-center text-green rounded-lg bg-transparent hover:bg-light-gray hover:text-green"
                                onClick={resetFilters}>
                                Filter zurücksetzen
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FiltersSection;