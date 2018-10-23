import React, { Component } from 'react';
import {connect} from 'react-redux';
import { updateLostPetFormData } from '../../actions/LostPetForm';
import { createLostPet } from '../../actions/LostPets';
import { Button, Modal, Container } from 'semantic-ui-react';

class LostPetInput extends Component {
  constructor(){
    super();
    this.state = {
      modalActive: false,
    }
  }

  fileChangeHandler = event => {
    const {name} = event.target;
    const currentLostPetFormData = Object.assign({}, this.props.lostPetFormData, {
      [name]: event.target.files[0]
    })
    this.props.updateLostPetFormData(currentLostPetFormData);
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createLostPet(this.props.lostPetFormData)
    this.handleModal();
  }

  handleChange = event => {
    const {name, value} = event.target;
    const currentLostPetFormData = Object.assign({}, this.props.lostPetFormData, {
      [name]: value
    })
    this.props.updateLostPetFormData(currentLostPetFormData);
  }

  handleModal = () => {
    this.setState({
      modalActive: !this.state.modalActive
    })
  }

  render(){
    const states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME",
    "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI",
    "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
    const stateList = states.map((state,idx) => {
      return (
        <option key={idx}>{state}</option>
      )
    })
    const {animal_type, name, gender, breed, city, state, personality, chipped} = this.props.lostPetFormData;
    return(
      <Container>
        <Button floated="right" circular icon='plus' color='teal' onClick={this.handleModal} />
        <Modal open={this.state.modalActive} closeOnDimmerClick={true}
            onClose={this.handleModal}>
          <Modal.Header>Add Lost Pet</Modal.Header>
          <Modal.Content text>
            <Modal.Description>
              <form onSubmit={this.handleSubmit}>
                <div>
                  Animal Type: <select name="animal_type" value={animal_type} onChange={this.handleChange}>
                    <option></option>
                    <option value="Dog">Dog</option>
                    <option>Cat</option>
                    <option>Bird</option>
                    <option>Other</option>
                  </select>
                </div>
                <div >
                  Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
                </div>
                <div>
                  Gender: <select name="gender" value={gender} onChange={this.handleChange}>
                    <option></option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div >
                  Breed: <input type="text" name="breed" value={breed} onChange={this.handleChange} />
                </div>
                <div>
                  City: <input type="text" name="city" value={city} onChange={this.handleChange} />
                </div>
                <div>
                  State: <select name="state" value={state} onChange={this.handleChange}>
                    <option></option>
                    {stateList}
                  </select>
                </div>
                <div>
                  Personality: <input type="text" value={personality} name="personality" onChange={this.handleChange} />
                </div>
                <div >
                  Chipped: <input type="checkbox" name="chipped" value={chipped} onChange={this.handleChange} />
                </div>
                {/* <div className="FoundPetInputField">
                  Image Url: <input type="text" value={image_url} name="image_url" onChange={this.handleChange} />
                </div> */}
                <br />
                <input type="file" name="pet_image" value={this.props.pet_image} onChange={this.fileChangeHandler} />
                <br />
                <br />
                <input type="submit" />
              </form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    lostPetFormData: state.lostPetFormData
  }
}

export default connect(mapStateToProps, {
  updateLostPetFormData,
  createLostPet
})(LostPetInput);