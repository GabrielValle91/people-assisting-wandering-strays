import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Navigation extends Component {
  constructor(props){
    super();
    this.state={
      activeItem: props.activeItem
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    if (this.props.userDetails.id) {
      return (
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item header>PAWS</Menu.Item>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}><NavLink to='/' exact>Home</NavLink></Menu.Item>
            <Menu.Item name='foundPets' active={activeItem === 'foundPets'} onClick={this.handleItemClick}><NavLink to="/found_pets" exact>Found Pets</NavLink></Menu.Item>
            <Menu.Item name='lostPets' active={activeItem === 'lostPets'} onClick={this.handleItemClick}><NavLink to="/lost_pets" exact>Lost Pets</NavLink></Menu.Item>
            <Menu.Item name='aboutUs' active={activeItem === 'aboutUs'} onClick={this.handleItemClick}><NavLink to="/about" exact>About Us</NavLink></Menu.Item>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick}><NavLink to="/logout" exact>Log Out</NavLink></Menu.Item>
          </Menu>
        </Segment>
      ) } else {
      return (
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item header>PAWS</Menu.Item>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}><NavLink to='/' exact>Home</NavLink></Menu.Item>
            <Menu.Item name='aboutUs' active={activeItem === 'aboutUs'} onClick={this.handleItemClick}><NavLink to="/about" exact>About Us</NavLink></Menu.Item>
            <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick}><NavLink to='login' exact>Log In</NavLink></Menu.Item>
            <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}><NavLink to='/signup' exact>Sign Up</NavLink></Menu.Item>
          </Menu>
        </Segment>
      )
    }
  }
}

const mapStateToProps = state => {
  return ({
    userDetails: state.userAuthentication
  })
}

export default connect(mapStateToProps)(Navigation);