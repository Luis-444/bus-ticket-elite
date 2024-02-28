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
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const register = () => {
      axiosClient.post('/register', { username, password, confirmPassword }).then(response => {
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