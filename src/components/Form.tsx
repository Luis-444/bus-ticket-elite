import { Label, TextInput } from 'flowbite-react';
import { Select } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { useState } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';

export default function Form() {
  const [deadline, setDeadline] = useState('');
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
        setFolio(res.data.folio);
        console.log(res);
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
    <div className="flex max-w-md flex-col gap-4">
      <div>
        <TextInput id="base" type="date" sizing="md" value={deadline} onChange={e => setDeadline(e.target.value)} />
      </div>
      <div className="flex">
        <div className="w-3/4">
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="small" value="Selecciona la ciudad" />
            </div>
            <Select id="cities" required value={city} onChange={e => changeCity(e.target.value)}>
              <option value={'Matamoros'}>Matamoros</option>
              <option value={'Valle Hermoso'}>Valle Hermoso</option>
            </Select>
          </div>
        </div>
        <div className="w1/4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="large" value="Precio Unitario" />
            </div>
            <TextInput id="large" type="number" sizing="md" value={price} disabled />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-3/4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="small" value="Ingresa la cantidad de boletos" />
            </div>
            <TextInput id="small" type="number" sizing="md" value={quantity} onChange={e => changeQuantity(Number(e.target.value))} />
          </div>
        </div>
        <div className="w1/4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="large" value="Precio Total a pagar" />
            </div>
            <TextInput id="large" type="number" sizing="md" value={total} disabled />
          </div>
        </div>
      </div>
      <div className="mb-2 block">
        <Button className="bg-red-500" onClick={savePurchase}>Comprar</Button>
      </div>
      <div className="mb-2 block">
        {folio ? <QRCode value={folio} size={200} /> : null}
      </div>
    </div>
  );
}
