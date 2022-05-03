
import React, { useEffect, useState} from 'react';

function EditPost(props) {
  const [posts, setPosts] = useState([]);
  console.log('posts', posts)
  useEffect(() => {
    fetch ('https://strangers-things.herokuapp.com/api/2110-vpi-web-pt-resources/posts')
    .then((res)=> res.json())
    .then(({data})=>{
      console.log ('data', data)
      setPosts(data.posts)
    })
    .catch(console.error)
  },[])
  
  .then(response => response.json())
        .then(results => {
            console.log(results);
            localStorage.setItem("token", results.data.token)
            alert(results.data.message)
        }).catch(console.error);

  return (
    <div className="posts-list">
            <div className="postOptions">
                <h2>Edit Post</h2>
            </div>
                {posts.map((post, index) => (
                <div className="post" key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p className="post-price">Price: {post.price}</p>
                    <p className="post-seller">Seller: {post.author.username} </p>
                    <p className="post-location">Location: {post.location} </p>
                </div>
                ))}
    </div>
  )
}

export default EditPost;