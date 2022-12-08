import '../App.css';
import productsPhoto from '../assets/default_image_products.jpg';
import butterPhoto from '../assets/butter_image.jpeg';
import milkPhoto from '../assets/milk_image.jpeg';
import colaPhoto from '../assets/cola_image.jpeg';
import jougurtPhoto from '../assets/jougurt_image.jpg';

function PriceDevCards(props) {

    return(
        <div className="grid grid-cols-8 mt-10">
            <div
                className="bg-white lg:col-start-2 lg:col-span-6 col-start-1 col-span-8 border border-light-green rounded-lg shadow-md">
                {props.name==="Milchmixgetränk"?
                    <img className="rounded-t-lg" src={milkPhoto} alt="milk"/>
                    : props.name==="Butter"?
                        <img className="rounded-t-lg" src={butterPhoto} alt="butter"/>
                        :props.name==="Colagetränk"?
                            <img className="rounded-t-lg" src={colaPhoto} alt="cola"/>
                            :props.name==="Joghurt natur"?
                                <img className="rounded-t-lg" src={jougurtPhoto} alt="jougurt_with_berries"/>
                                : <img className="rounded-t-lg" src={productsPhoto} alt="grossery_shop_vegitables"/>
                }
                <div
                    className="pt-5 px-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-green">{props.category}: {props.name}</h5>
                    <p className='mb-6 italic text-sm'>Das Basisjahr für die Berechnung der Inflation ist <span className="font-bold">2020</span></p>

                    <div className="flex justify-between my-4">
                        <span className="text-base font-medium text-blue-700 dark:text-white">Inflation 08/2022:</span>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">{parseFloat(props.inflationAugust - 100).toFixed(1)}%</span>
                    </div>
                    <div className="bg-light-gray/40 rounded-full h-2.5 my-2">
                        <div className="bg-green h-2.5 rounded-full" style={{width:`${parseFloat(props.inflationAugust - 100).toFixed(1)}%`}}></div>
                    </div>

                    <div className="flex justify-between my-4">
                        <span className="text-base font-medium text-blue-700 dark:text-white">Inflation 07/2022:</span>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">{parseFloat(props.inflationJuly - 100).toFixed(1)}%</span>
                    </div>
                    <div className="bg-light-gray/40 rounded-full h-2.5 my-2">
                        <div className="bg-green h-2.5 rounded-full" style={{width:`${parseFloat(props.inflationJuly - 100).toFixed(1)}%`}}></div>
                    </div>
                    <div className="my-6 text-left">
                        <p className="mb-3 font-bold text-green">Inflationsänderung: {props.inflationdifference} % - Punkte</p>
                        <p className="italic text-sm">Diese Differenz wird aus den Werten für August und Juli 2022 berechnet</p>
                    </div>
                </div>
            </div>
        </div>
    )
}export default PriceDevCards;