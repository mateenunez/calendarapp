import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation' // Importar el componente creado en 
//  components/navigation y usandolo como una etiqueta 
import {calendars} from './calendar.json';
import { render } from '@testing-library/react';
import CalendarForm from './components/CalendarForm';




class App extends Component {
constructor(){
  super();
  this.state = {
    calendars
  }
  this.handleAddCalendar = this.handleAddCalendar.bind(this); //Cuando se pierde el props se utiliza esta línea de código
}

handleAddCalendar(calendar) {
  this.setState({
    calendars: [...this.state.calendars, calendar]
  })
  calendars.push(calendar);
  var jsonCalendars = JSON.stringify(calendars)
  console.log(jsonCalendars)

}

render(){
  const calendars = this.state.calendars.map((calendar, i) => {
    return(
    <div className="card"> 
    <div className="card-header">
    <h3>{calendar.title}</h3>
    </div>
    <div className="card-body">
      <h5>{calendar.date}</h5>
    </div>
    <div className="card-footer">
      <h6>{calendar.class}</h6>
    </div>
    </div>
    )
 });


 return (

      <div className="App">
      <header className="App-header">
  <Navigation title="Calendar Application" className="navbar navbar-light"> 
  </Navigation>
  <span className="badge badge-pill badge-light ml-2">
  {this.state.calendars.length} 
  </span> 
      </header>

      <div className="container">
        <div className="row">
          <CalendarForm onAddCalendar={this.handleAddCalendar}></CalendarForm>
        {calendars}
        </div>
      </div>
      <footer className="App-footer">
<h5>@mateenunez</h5>
      </footer>
    </div>
  );
}
}






export default App;

