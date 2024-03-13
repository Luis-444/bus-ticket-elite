import { Label, TextInput } from 'flowbite-react';
import { Select } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { useState } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';

export default function Form() {

  const getDeadline = () => {
    var today = new Date();
    var todayInt = today.getDay();
    var deadlineInt = 6 - todayInt;
    today.setDate(today.getDate() + deadlineInt);
    console.log(today);
    return today;
  }

  const [deadline, setDeadline] = useState(getDeadline());
  const [city, setCity] = useState('Matamoros');
  const [price, setPrice] = useState(10);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(10);
  const [folio, setFolio] = useState('');

  const savePurchase = () => {
    axios.post('http://localhost:3000/api/purchases', {
      deadline: deadline,
      city: city,
      price: price,
      quantity: quantity,
      total: total
    })
      .then(res => {
        window.location.href = '/view_purchases';
      })
      .catch(err => {
        console.log(err);
      });
  }

  const changeQuantity = (quantity: number) => {
    setQuantity(quantity);
    setTotal(quantity * price);
  }

  const changeCity = (city: string) => {
    const prices: { [key: string]: number } = {
      'Matamoros': 10,
      'Valle Hermoso': 20
    }
    setCity(city);
    setPrice(prices[city]);
    setTotal(quantity * prices[city]);
  }

  return (
    <div className="flex max-w-md flex-col gap-4 p-4">
      <div>
        <Label className='text-xl'>Fecha limite de uso {deadline.toLocaleDateString('es-ES', {
          day: '2-digit', // Día con dos dígitos
          month: 'long', // Mes en letra completa
          year: 'numeric' // Año con cuatro dígitos
        })}</Label>
      </div>
      <section className='grid grid-cols-5 gap-2'>
        <div className='col-span-3'>
          <Label className='text-xs md:taxt-base' htmlFor="small" value="Selecciona la ciudad" />
          <Select id="cities" required value={city} onChange={e => changeCity(e.target.value)}>
            <option value={'Matamoros'}>Matamoros</option>
            <option value={'Valle Hermoso'}>Valle Hermoso</option>
          </Select>
        </div>
        <div className='col-span-2'>
          <Label className='text-xs md:taxt-base' htmlFor="large" value="Precio Unitario" />
          <TextInput id="large" type="number" sizing="md" value={price} disabled />
        </div>
        <div className='col-span-3'>
          <Label className='text-xs md:taxt-base' htmlFor="small" value="Ingresa la cantidad de boletos" />
          <TextInput id="small" type="number" sizing="md" value={quantity} onChange={e => changeQuantity(Number(e.target.value))} />
        </div>
        <div className='col-span-2'>
          <Label className='text-xs md:taxt-base' htmlFor="large" value="Precio Total" />
          <TextInput id="large" type="number" sizing="md" value={total} disabled />
        </div>
      </section>
      <div className="flex justify-end gap-2 items-center">
        <Button className="bg-primary-hover w-full md:w-auto" onClick={savePurchase}>Comprar</Button>
        <a className='w-full md:w-auto' href="/">
          <Button color='red' className='w-full md:w-auto'>Regresar</Button>
        </a>
      </div>
    </div>
  );
}
