import './AppCars.css';

function AppCars({car}) {
    return <div>
        <h2> {car.heading} </h2>
        <img src={car.image} alt=""/>
        <p> {car.description} </p>
    </div>
}

export default AppCars;
