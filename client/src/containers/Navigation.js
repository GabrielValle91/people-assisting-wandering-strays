import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class Navigation extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item header>PAWS</Menu.Item>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}><NavLink to="/" exact>Home</NavLink></Menu.Item>
        <Menu.Item name='foundPets' active={activeItem === 'foundPets'} onClick={this.handleItemClick}><NavLink to="/found_pets" exact>Found Pets</NavLink></Menu.Item>
        <Menu.Item name='lostPets' active={activeItem === 'lostPets'} onClick={this.handleItemClick}><NavLink to="/lost_pets" exact>Lost Pets</NavLink></Menu.Item>
        <Menu.Item name='aboutUs' active={activeItem === 'aboutUs'} onClick={this.handleItemClick}><NavLink to="/about" exact>About Us</NavLink></Menu.Item>
      </Menu>
    )
  }
}

export default Navigation;