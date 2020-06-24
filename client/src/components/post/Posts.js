import React, { Component } from 'react';
import axios from 'axios';
import PostList from './PostList';
import PostForm from './PostForm';
class Posts extends Component {
  state = { posts: [] }
  componentDidMount() {
    // grab all the posts from db
    axios.get('/api/posts')
      .then( res => {
        // set the posts to state
        this.setState({ posts: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }
  addPost = (post) => {
    // add the post to the db
    axios.post('/api/posts', { post } )
    // add the post to the state
      .then(res => {
        const { posts } = this.state 
        this.setState({ posts: [...posts, res.data] })
      })
      .catch( err => {
        console.log(err)
      })
  }
  updatePost = (id, post) => {
    // update the post in the db
    axios.put(`/api/posts/${id}`, { post })
    .then ( res => {
      const posts = this.state.posts.map( p => {
        if ( p.id === id) {
          return res.data
        }
      return p
      })
      this.setState({ posts })
    })
    // update the post in state
    .catch( err => {
      console.log(err)
    })
  }
  deletePost = (id) => {
    // delete the from db
    axios.delete(`/api/posts/${id}`)
      .then( res => {
        const { posts } = this.state
        this.setState({ posts: posts.filter(p => p.id !== id)})
      })
      .catch( err => {
        console.log(err)
      })
    // delete from the state
  }

  render() {
    const { posts } = this.state
    return(
      <>
        <h1>Posts</h1>
        <PostForm addPost={this.addPost} />
        <PostList posts={posts} 
          updatePost={this.updatePost} 
          deletePost={this.deletePost} 
        />
      </>
    )
  }
}
export default Posts;