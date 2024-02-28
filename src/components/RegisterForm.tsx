import {
    Button,
    Checkbox,
    Label,
    TextInput,
  } from 'flowbite-react';
  import { useState } from 'react';
  
  export default function LoginForm() {

    //send rwequest to server to login
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const register = () => {
      fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, confirmPassword })
      })
        .then(response => {
            if(response.ok){
            return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            console.log('Success:', data);
            localStorage.setItem('user', JSON.stringify(data));
            window.location.href = '/';
        })
        .catch(error => console.error('Error:', error));
    }
  
    return (
        <form className="w-full max-w-lg flex flex-col gap-4">
            <div>
            <Label>Usuario</Label>
            <TextInput placeholder='Usuario' value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
            <Label>Contraseña</Label>
            <TextInput placeholder='Contraseña' type='password' value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div>
            <Label>Confirmar contraseña</Label>
            <TextInput placeholder='Contraseña' type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            </div>
            <div className='flex justify-between items-center'>
            <a href="/login" className='underline text-blue-400'>Ya tengo cuenta</a>
            <Button onClick={register} color="dark">Registrarme</Button>
            </div>
        </form>
    );
  }