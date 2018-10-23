import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLostPetComment } from '../../actions/LostPets';
import { createLostPetComment } from '../../actions/LostPets';
import { getLostPetComments } from '../../actions/LostPets';

class LostPetComments extends Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.createLostPetComment(this.props.lostPetComment)
  }

  handleChange = event => {
    const {name, value} = event.target;
    const currentLostPetComment = Object.assign({},this.props.lostPetComment, {
      user_id: this.props.userId,
      [name]: value,
      lost_pet_id: this.props.petId
    })
    this.props.updateLostPetComment(currentLostPetComment);
  }

  componentDidMount(){
    this.props.getLostPetComments(this.props.petId);
  }

  render() {
    const comment = this.props.lostPetComment.comment;
    const commentList = this.props.lostPetComments ? this.props.lostPetComments.map(comment => {
      return(
        <p key={comment.id}>{comment.user.username} says: {comment.comment}</p>
      )
    }) : ''
    return (
      <div>
        {commentList ? commentList : ''}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="comment" value={comment} onChange={this.handleChange}/>
          <button type="submit">Add Comment</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    lostPetComment: state.lostPetComment,
    lostPetComments: state.lostPetComments,
    userId: state.userAuthentication.id
  }
}

export default connect(mapStateToProps, {
  updateLostPetComment,
  createLostPetComment,
  getLostPetComments
})(LostPetComments);