import {
    Button,
    Checkbox,
    Label,
    TextInput
} from 'flowbite-react';
import { useEffect, useState, type HtmlHTMLAttributes } from 'react';
import axiosClient from '../axiosClient';
import ExpDateInput from './ExpDateInput';
import CvvInput from './CvvInput';
import CardNumberInput from './CardNumberInput';

export default function AddCardForm() {
    const [user, setUser] = useState({
        id: 0,
        username: '',
        email: '',
        password: '',
        token: ''
    });

    const [expDate, setExpDate] = useState<string>('');
    const [cvv, setCvv] = useState<string>('');
    const [cardNumber, setCardNumber] = useState<string>('');
  
    const handleExpDateChange = (newExpDate: string) => {
      setExpDate(newExpDate);
    };
  
    const handleCvvChange = (newCvv: string) => {
      setCvv(newCvv);
    };
  
    const handleCardNumberChange = (newCardNumber: string) => {
      setCardNumber(newCardNumber);
    };
    
    const [Remember, setRemember] = useState(false);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user') || '{}'));
    }, []);

    const addCard = () => {
        const data = {
            card_number: cardNumber,
            remember: Remember,
            cvv,
            date: expDate
        }
        axiosClient.post('cards', data).then(response => {
            if (!response.data.error) {
                window.location.href = '/purchase';
            }
            else {
                console.error(response.data.message);
            }
        }).catch(error => {
        });
    }

    return (
        <section className='w-full max-w-[500px] p-2'>
            <h2 className='text-center'>Bienvenido <span className='font-medium'>{user.name}</span>. Añade una nueva tarjeta para continuar</h2>
            <hr className='my-3' />
            <div className='grid gap-2 grid-cols-1 md:grid-cols-12'>
                <CardNumberInput onCardNumberChange={handleCardNumberChange} />
                <CvvInput onCvvChange={handleCvvChange} />
                <ExpDateInput onExpDateChange={handleExpDateChange} />
            </div>
            <div className='flex justify-between items-center mt-2'>
                <div className="flex items-center gap-2">
                    <Checkbox
                        id="rememberme"
                        checked={Remember}
                        onChange={(e) => setRemember(e.target.checked)}
                    />
                    <Label htmlFor='rememberme' className='select-none'>Recordar tarjeta</Label>
                </div>
                <Button onClick={addCard} color="dark">Añadir tarjeta</Button>
            </div>
        </section>
    )
} 