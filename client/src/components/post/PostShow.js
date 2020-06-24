import React from 'react';
const PostShow = (props) => (
  <>
    <h1>{props.location.state.title}</h1>
    <p>{props.location.state.body}</p>
  </>
)
export default PostShow;