import React, {useState} from 'react';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCon, setPasswordCon] = useState('');
const handleSubmit = (event)=>{
    event.preventDefault()
    if (password !== passwordCon) {
        alert("Passwords don't match!");
    } else {
        fetch('https://strangers-things.herokuapp.com/api/2110-vpi-web-pt/users/register', {
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
            .then(result => {
                console.log(result);
                const { token } = result.data;
                localStorage.setItem('token', token);
                alert(result.data.message)
            })
            .catch(console.error);
    }
}
  return (
    <div>
    <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username:</label>
                <input type='text' required name='username' value={username} onChange={(event) => setUsername(event.target.value)} />
                <label htmlFor='password'>Password:</label>
                <input type='password' required minLength='4' name='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                <label htmlFor='password-confirm'>Confirm Password:</label>
                <input type='password' required minLength='4' name='password-confirm' value={passwordCon} onChange={(event) => setPasswordCon(event.target.value)} />
                <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default Register