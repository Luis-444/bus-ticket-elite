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

  const handleLogin = () => {
    console.log('username:', username);
    console.log('password:', password);
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
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
      <div className='flex justify-between items-center'>
        <div className="flex items-center gap-2">
          <Checkbox id="rememberme"></Checkbox>
          <Label htmlFor='rememberme' className='select-none'>Recordar usuario</Label>
        </div>
        <Button onClick={handleLogin} color="dark">Iniciar sesion</Button>
      </div>
      <a href="/register" className='w-full text-center underline text-blue-400'>No tengo cuenta</a>
    </form>
  );
}