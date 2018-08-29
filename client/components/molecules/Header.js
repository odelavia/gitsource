import React, { Component } from 'react';
import Button from '../atoms/Button.js';

class Header extends Component{
  render(){
    return(
      <div className="header-wrapper">
        <div className="header-container">
            <h1 className="header-heading">Build more. Together.</h1>
            <p className="header-subheading">Discover interesting projects. Find new teammates. Finish your projects faster.</p>
            <Button label="Find projects" redirect="/project/view/"/>
        </div>
      </div>
    )
  }
}

export default Header;