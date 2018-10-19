import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFoundPetComment } from '../../actions/FoundPets';
import { createFoundPetComment } from '../../actions/FoundPets';
import { getFoundPetComments } from '../../actions/FoundPets';

class FoundPetComments extends Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.createFoundPetComment(this.props.foundPetComment)
  }

  handleChange = event => {
    const {name, value} = event.target;
    const currentFoundPetComment = Object.assign({},this.props.foundPetComment, {
      user_id: this.props.userId,
      [name]: value,
      found_pet_id: this.props.petId
    })
    this.props.updateFoundPetComment(currentFoundPetComment);
  }

  componentDidMount(){
    this.props.getFoundPetComments(this.props.petId);
  }

  render() {
    const comment = this.props.foundPetComment.comment;
    const commentList = this.props.foundPetComments ? this.props.foundPetComments.map(comment => {
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
    foundPetComment: state.foundPetComment,
    foundPetComments: state.foundPetComments,
    userId: state.userAuthentication.id
  }
}

export default connect(mapStateToProps, {
  updateFoundPetComment,
  createFoundPetComment,
  getFoundPetComments
})(FoundPetComments);