import React, {Component} from 'react';

class CalendarForm extends Component {
    constructor(){
        super();
        this.state= {
            title: '',
            date: '',
            class: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

 handleInput(e){
    const {value, name}=  e.target;
    this.setState({
        [name] : value
    })
//console.log(this.state) 
};

handleSubmit(e){
    e.preventDefault();
    this.props.onAddCalendar(this.state)
    
}

render() {
    return (
        <div className="card">
            <form className="card-body" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" name="title" onChange={this.handleInput} className="form-control" placeholder="Title"></input>
                </div>
                <div className="form-group">
                    <input type="text" name="date" onChange={this.handleInput} className="form-control" placeholder="Date"></input>
                </div>
                <div className="form-group">
                    <input type="text" name="class" onChange={this.handleInput} className="form-control" placeholder="Class"></input>
                </div>
                <button type="submit" className="btn btn-dark"> Save Birthday</button>
            </form>
        </div>
    )
}


}


export default CalendarForm;