import '../App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function FiltersSection() {
    const [superCategory, setSuperCategory] = useState();
    useEffect(() => {
        axios.get('http://localhost:8080/pbc/super-category').then((response) => {
            setSuperCategory(response.data);
        });
    }, []);

    return (
        <section className='bg-tahiti grid grid-cols-7'>
            {/*<label htmlFor="super-categories" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select
                an option</label>*/}
            <div className="py-6 self-center md:col-start-3 md:col-span-3 col-start-2 col-span-5">
                <h4 className="mb-10 mt-4 text-2xl font-extrabold text-green">Schaue dir mal Inflationsrate auf deine Lieblingslebensmittel</h4>
                <p className='mb-6'>Mit unserem Filter kannst du dir die Inflationsentwicklung nicht nur für einzelne Produkte sowie auch
                    für Kategorien der Lebensmittel anzeigen lassen</p>
                {superCategory &&
                <select id="super-categories"
                        defaultValue={'DEFAULT'}
                        className="my-6">
                    <option value="DEFAULT" disabled={true}>Supercategorie</option>
                    {superCategory.map(({scatId, scatName}) => (
                        <option value={scatName} key={scatId}>{scatName}</option>
                    ))}
                </select>
                }
            </div>
        </section>
    )
}

export default FiltersSection;