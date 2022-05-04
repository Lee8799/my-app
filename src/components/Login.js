import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';


function Login(props) {
  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');
 
    const setLogin = props.logIn

  console.log('username:',username)
  console.log('password:',password)
  const handleSubmit = async (event) => {
    
    await fetch ('https://strangers-things.herokuapp.com/api/2110-vpi-web-pt/users/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: username,
                password: password
            }
        })
    }).then(response => response.json())
        .then(results => {
            console.log(results);
            localStorage.setItem("token", results.data.token)
            alert(results.data.message)
        }).catch(console.error);

}
  return (
    <div>
        <h3>Log In</h3>
        <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username:</label>
                <input type='text' required name='username' value={username}
                 onChange={(event) => setUsername(event.target.value)} />
                <label htmlFor='password'>Password:</label>
                <input type='password' required minLength='4' name='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                <button type='submit'>Log In</button>
                reload(Login);
        </form>
            <Link to="/Register">Don't have an account yet? Register today!</Link>

    </div>
  )
}

export default Login;