import './AppCars.css';
function AppCars(props) {
  return <div>
      <h2> {props.heading} </h2>
      <img src={props.image} alt=""/>
      <p> {props.description} </p>
  </div>
}

export default AppCars;
