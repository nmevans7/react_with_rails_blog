import React from 'react';
import Post from './Post';
import { Link } from 'react-router-dom';
const PostList = ({ posts, updatePost, deletePost }) => (
  <>
    { posts.map( p => 
      <Link to={{
        pathname: `/posts/${p.id}`,
        state: { ...p } 
      }}>
        <Post 
          key={p.id}
          {...p}
          updatePost={updatePost}
          deletePost={deletePost}
        />
      </Link>
    ) 
    }
  </>
)
export default PostList;