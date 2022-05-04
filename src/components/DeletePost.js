import React from 'react'



const DeletePost = (props) => {

  const delID = props.id 
  // console.log (delID, 'deletions')

  const token = 'Bearer ' + localStorage.getItem('token')
  const handleSubmit = async () => {
    
    
  await fetch (`https://strangers-things.herokuapp.com/api/2110-vpi-web-pt/posts/${delID}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'Application/json',
        'Authorization': token
      }
      }).then((response) => response.json())
       .then((result) => {
      console.log(result);
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