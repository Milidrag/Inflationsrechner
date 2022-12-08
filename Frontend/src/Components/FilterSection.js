import '../App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Select from 'react-select';
import PriceDevCards from "./PriceDevCards";

const baseURL='http://localhost:8080/pbc'

function FilterSection() {

    const customStyles = {
        option: provided => ({
            ...provided,
            color: '#092329'
        }),
        control: (provided, state) => ({
            ...provided,
            color: '#092329',
            boxShadow: "none",
            borderColor: state.isFocused ? '#092329' : state.isSelected?'#092329':'#092329',
            "&:hover": {
                borderColor: "#092329"
            },
            marginTop:'30px',
            backgroundColor:'#83c3a9'
        }),
        placeholder: provided => ({
            ...provided,
            color: '#092329'
        }),
        indicatorSeparator:provided =>({
            ...provided,
            backgroundColor:'#092329'
        }),
        dropdownIndicator:provided =>({
            ...provided,
            "svg": {
                fill: "#092329"
            }
        }),
        container:(provided, state)=>({
            ...provided,
            border:state.isFocused? 0 : 0,
        })
    }

    const [products, setProducts] = useState();
    const [categories, setCategories] = useState();
    const [superCategories, setSuperCategories] = useState();

    const [selectedSupCategory, setSelectedSupCategory] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedProduct, setSelectedProduct] = useState("");

    const [showFilterResults,setShowFilterResults] = useState({
        superCategoryResults: false,
        categoryResults: false,
        productResults: false
    });


    useEffect(() => {
        axios.get(`${baseURL}/products`).then((res) => {
            setProducts(res.data);
            console.log(res.data)
        });
        axios.get(`${baseURL}/categories`).then((response) => {
            setCategories(response.data);
            console.log(response.data)
        });
        axios.get(`${baseURL}/super-categories`).then((response) => {
            setSuperCategories(response.data);
            console.log(response.data)
        });
    }, []);

    const filteredProducts= products?.filter((product)=>{
        if(selectedSupCategory){
           return product.prodScat.scatName===selectedSupCategory;
        }else if(selectedCategory){
           return product.prodCat.catName===selectedCategory;
        }else{
            return product;
        }
    });

    const filteredCategories= categories?.filter((category)=>{
        let id;
        if(selectedSupCategory){
            return category.catScat.scatName===selectedSupCategory;
        }else if(selectedProduct){
            products?.map((data)=>{
               if(data.prodName===selectedProduct){
                   id=data.prodCat.catId
               }
            })
            return category.catId===id
        }else{
            return categories;
        }
    });

    const filteredSuperCategories= superCategories?.filter((superCategory)=>{
        let id;
        if(selectedCategory){
            categories?.map((data)=>{
                if(data.catName===selectedCategory){
                    id=data.catScat.scatId
                }
            })
            return superCategory.scatId===id
        }else if(selectedProduct){
            products?.map((data)=>{
                if(data.prodName===selectedProduct){
                    id=data.prodScat.scatId
                }
            })
            return superCategory.scatId===id
        }else{
            return superCategories;
        }
    });


    const onChangeProd = (e) => {
        const value = e.prodName;
        setSelectedProduct(value);
        console.log(e);
    }

    const onChangeCat = (e) => {
        const value = e.catName;
        setSelectedCategory(value);
        console.log(e);
    }

    const onChangeSuperCat = (e) => {
        const value = e.scatName;
        setSelectedSupCategory(value);
        console.log(e);
    }

    const resetFilters = (e) => {
        e.preventDefault();
        setSelectedSupCategory("");
        setSelectedCategory("");
        setSelectedProduct("");
    }

    const showPriceDevelopment = (e) => {
        e.preventDefault();
        if (selectedSupCategory) {
            setShowFilterResults(prev => ({...prev, superCategoryResults: true}))
        } else if (selectedCategory) {
            setShowFilterResults(prev => ({...prev, categoryResults: true}))
        } else if (selectedProduct) {
            setShowFilterResults(prev => ({...prev, productResults: true}))
        } else {
            setShowFilterResults(prev => ({...prev, superCategoryResults: false}));
            setShowFilterResults(prev => ({...prev, categoryResults: false}));
            setShowFilterResults(prev => ({...prev, productResults: false}));
        }

    }

    return (
        <>
            <section className='bg-tahiti grid grid-cols-7' id="services">
                <div className="py-6 self-center md:col-start-3 md:col-span-3 col-start-2 col-span-5">
                    <h4 className="mb-10 mt-4 text-2xl font-extrabold text-green">Schaue dir mal Inflationsrate auf
                        deine
                        Lieblingslebensmittel</h4>
                    <p className='mb-6'>Mit unserem Filter kannst du dir die Inflationsentwicklung nicht nur für
                        einzelne
                        Produkte sowie auch
                        für Kategorien der Lebensmittel anzeigen lassen</p>
                    <div>
                        {superCategories &&
                        <Select
                            name="super-category"
                            isClearable
                            styles={customStyles}
                            options={filteredSuperCategories}
                            getOptionLabel={(option) => option.scatName}
                            getOptionValue={(option) => option.scatName}
                            onChange={onChangeSuperCat}
                            value={selectedSupCategory}
                            placeholder={selectedSupCategory ? selectedSupCategory: "Superkategorie"}
                        />
                        }
                        {categories &&
                        <Select
                            name="category"
                            styles={customStyles}
                            options={filteredCategories}
                            getOptionLabel={(option) => option.catName}
                            getOptionValue={(option) => option.catName}
                            onChange={onChangeCat}
                            value={selectedCategory}
                            placeholder={selectedCategory ? selectedCategory: "Kategorie"}
                        />
                        }
                        {products &&
                        <Select
                            name="product"
                            styles={customStyles}
                            options={filteredProducts}
                            getOptionLabel={(option) => option.prodName}
                            getOptionValue={(option) => option.prodName}
                            onChange={onChangeProd}
                            value={selectedProduct}
                            placeholder={selectedProduct ? selectedProduct: "Produkt"}
                        />
                        }
                        {showFilterResults.superCategoryResults &&
                        superCategories?.map((data) => (
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
                        {showFilterResults.categoryResults &&
                        categories?.map((data) => (
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
                        {showFilterResults.productResults &&
                        products?.map((data) => (
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
                        <div className="my-8">
                            <button
                                className="inline-flex justify-center items-center mt-6 py-3 px-8 mx-3 text-base border-2 border-green font-medium text-center text-light-gray rounded-lg bg-green hover:bg-light-green hover:text-light-gray hover:border-light-green"
                                onClick={showPriceDevelopment}
                            >
                                Filter anwenden
                            </button>
                            <button
                                className="inline-flex justify-center items-center mt-6 py-3 px-5 mx-3 text-base border-2 border-green font-medium text-center text-green rounded-lg bg-transparent hover:bg-light-gray hover:text-green"
                                onClick={resetFilters}
                            >
                                Filter zurücksetzen
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FilterSection;