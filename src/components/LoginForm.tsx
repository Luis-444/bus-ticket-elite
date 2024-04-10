import {
  Button,
  Checkbox,
  Label,
  TextInput,
} from 'flowbite-react';
import { useEffect, useState } from 'react';
import axiosClient from '../axiosClient';

export default function LoginForm() {

  useEffect(() => {
    const user = localStorage.getItem('user');
    if(user){
      window.location.href = '/';
    }
  }, []);

  //send rwequest to server to login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axiosClient.post('/login', { email, password }).then(response => {
      if(!response.data.error){
        localStorage.setItem('user', JSON.stringify(response.data.user))
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
        <Label>Correo electronico</Label>
        <TextInput placeholder='Correo electronico' value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <Label>Contraseña</Label>
        <TextInput placeholder='Contraseña' type='password' value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <div className='flex justify-center items-center'>
        <Button onClick={handleLogin} color="dark">Iniciar sesion</Button>
      </div>
      <a href="/register" className='w-full text-center underline text-blue-400'>No tengo cuenta</a>
    </form>
  );
}