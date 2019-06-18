import React, { Component } from 'react';

class NavBar extends Component {
    render() {
      return <nav className="navbar navbar-expand-xs bg-primary justify-content-between">
      <div className="container-fluid">
        <span className="navbar-brand text-dark mx-auto d-block text-center w-25 text-uppercase">{this.props.title}</span>
      </div>
    </nav>;
    }
  }
  export default NavBar