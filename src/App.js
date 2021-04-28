import './App.css';
import AppCars from "./components/AppCars";

function App() {
    const cars = [
        {
            heading: "Fiat Punto I (Тип 176) (1993—1999)",
            image: "Fiat_Punto_I.jpg",
            description: "В 1993 році в місті Турин було представлене перше покоління Fiat Punto. Автомобіль пропонувався як 3-х і 5-ти дверний хетчбек і кабріолет. В 1995 році Punto був обраний автомобілем року. В 1996 році Punto був найпродаванішим автомобілем в Європі."
        },
        {
            heading: "Fiat Punto II (Тип 188) (1999—2012)",
            image: "Fiat_Punto_II.jpg",
            description: "Друге покоління представлене в 1999 році до 100-річчя фірми Fiat. Автомобіль пропонувався як 3-х і 5-ти дверний хетчбек. У 2001 році представлена версія Abarth з ​​двигуном 1,8 16-кл. потужністю 131 к.с. і меншою вагою."
        },
        {
            heading: "Fiat Punto III (Тип 199) (2005—2018)",
            image: "Fiat_Punto_III.jpg",
            description: "Fiat Punto третього покоління отримав назву Fiat Grande Punto, вищу оцінку EuroNCAP за безпеку, удостоєний звання «Найкращий компакт» і нагороди «Золоте кермо» у Німеччині. Punto дебютував у Франкфурті, створений на загальній платформі з моделлю Opel Corsa С, тому ці автомобілі пов'язує до 30% загальних запчастин, а дизайн в стилі Maserati був розроблений ательє Ital Design. Салон створений власної дизайн-студією Fiat."
        }
    ]

    return (
        <div>
            {cars.map(car => {
                return <AppCars car={car}/>
            })}
        </div>
    );
}

export default App;
