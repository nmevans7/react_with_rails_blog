import React, { Component } from 'react';
import { Header, Button, Icon } from 'semantic-ui-react';
import PostForm from './PostForm';
class Post extends Component {
  state = { editing: false }
  toggleEdit = () => (
    this.setState({ editing: !this.state.editing })
  )
  render() {
    const { title, body, id, deletePost, updatePost } = this.props
    const { editing } = this.state
    return(
      <>
        { editing ?
          <PostForm 
            id={id}
            title={title}
            body={body}
            updatePost={updatePost}
            toggleEdit={this.toggleEdit}
          />
          :
          <div>
            <Header>{title}</Header>
            <p>
              {body}
            </p>
          </div>
        }
        <Button icon color='yellow' onClick={this.toggleEdit}>
          <Icon name='pencil' />
        </Button>
        <Button icon color='red' onClick={() => deletePost(id)}>
          <Icon name='trash' />
        </Button>
      </>
    )
  }
}
export default Post;