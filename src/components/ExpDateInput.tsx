import React, { useState } from 'react';
import { Label, TextInput } from 'flowbite-react';

interface ExpDateInputProps {
    onExpDateChange: (newExpDate: string) => void;
  }

const ExpDateInput: React.FC<ExpDateInputProps> = ({ onExpDateChange }) => {
  const [date, setDate] = useState('');

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    const formattedDate = formatInputDate(inputText);
    setDate(formattedDate);
    onExpDateChange(formattedDate);
  };

  const formatInputDate = (input: string) => {
    // Elimina cualquier caracter no numérico
    const numericValue = input.replace(/\D/g, '');

    // Formatea la fecha como MM/YY
    let formattedDate = numericValue.slice(0, 4); // Limita la cadena a 4 caracteres

    if (formattedDate.length > 2) {
      formattedDate = formattedDate.replace(/(\d{2})(\d{0,2})/, '$1/$2'); // Añade una barra después de los primeros dos dígitos
    }

    return formattedDate;
  };

  return (
    <div className='cols-span-12 md:col-span-6'>
      <Label>Fecha de expiracion</Label>
      <TextInput placeholder='MM/YY' value={date} onChange={handleDateChange} />
    </div>
  );
}

export default ExpDateInput;    