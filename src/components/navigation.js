import React, {Component} from 'react';

class Navigation extends Component {
    render(){return(
    <nav className="navbar navbar-light"> 
    { this.props.title }
  </nav>)
    }
};


export default Navigation;