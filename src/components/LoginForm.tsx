import {
  Button,
  Checkbox,
  Label,
  TextInput,
} from 'flowbite-react';
import { useState } from 'react';
import axiosClient from '../axiosClient';

export default function LoginForm() {
  //send rwequest to server to login
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axiosClient.post('/login', { username, password }).then(response => {
      if(!response.data.error){
        window.location.href = '/';
      }
      else{
        console.error(response.data.message);
      }
    }).catch(error => {
      console.error(error);
    });
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