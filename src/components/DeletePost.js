import React, { useEffect, useState} from 'react';
// import { Link } from 'react-router-dom'; 

const DeletePost = () =>{
  const [del, setDel] = useState ('');
  const handleSubmit = async (e) => {
    e.preventDefault()


    await fetch('https://strangers-things.herokuapp.com/api/2110-vpi-web-pt-resources/posts', {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        body: JSON.stringify({
          post: {
              
              willDeliver: true
          }
      })
  }).then(response => response.json())
      .then(result => {
          console.log(result);
          if (result.success === true) {
              alert('Post has been deleted')
          }
      })
      .catch(console.error);
  console.log('gettoken:', localStorage.getItem('token'))
}
return (
  <div className="del-list">
          <div className="delOptions">
              <h2>Delete</h2>
          </div>
              {del.map((post, index) => (
              <div className="del" key={index}>
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
export default DeletePost;