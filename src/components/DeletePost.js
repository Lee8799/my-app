import React from 'react'
// import { Post } from './components';


const DeletePost = (props) => {
  // const [deletePost, setDeletePost] = useState ([]);
  const postId = props.id 
  console.log ('postId:', postId)
  

  const token = 'Bearer ' + localStorage.getItem('token')
  const handleSubmit = async () => {
    

  await fetch (`https://strangers-things.herokuapp.com/api/2110-vpi-web-pt/posts/${postId}`, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json',
        'Authorization': token
      }
      }).then((response) => response.json())
       .then((data) => {
      console.log('newDATA', data);
  })
  .catch(console.error);

      }
  
   return (
     <div>
       <button onClick = {handleSubmit}>DELETE</button> 
       
     </div>
   ) 
  }
export default DeletePost;