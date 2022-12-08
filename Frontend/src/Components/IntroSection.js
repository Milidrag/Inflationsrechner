import '../App.css';
import IntroSectionImage from '../assets/introSection_bild.png';


function IntroSection (){
    return(
        <section id="about">
            <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 justify-center">
                <div className="lg:mt-0 lg:col-span-5 flex">
                    <img src={IntroSectionImage} alt="mockup"/>
                </div>
                <div className="place-self-center mr-auto pt-8 lg:col-span-7">
                    <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-green">Preisentwicklung für Butter und Co.</h1>
                    <p className="mb-6 mt-10 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-green">Sei informiert und nutze
                    unsere Services um Inflation für Lebensmittel zu verfolgen</p>
                    <button
                       className="inline-flex justify-center items-center mt-6 py-3 px-5 text-base font-medium text-center text-green rounded-lg border-2 border-yellow bg-yellow hover:bg-transparent ">
                        Mehr zur Inflation
                    </button>
                </div>
            </div>
        </section>
    );
}export default IntroSection;