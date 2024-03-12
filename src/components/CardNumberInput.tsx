import React, { useState } from 'react';
import { Label, TextInput } from 'flowbite-react';

interface CardNumberInputProps {
    onCardNumberChange: (newCardNumber: string) => void;
  }

const CardNumberInput: React.FC<CardNumberInputProps> = ({ onCardNumberChange }) => {
  const [cardNumber, setCardNumber] = useState('');

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    const formattedCardNumber = formatCardNumber(inputText);
    setCardNumber(formattedCardNumber);
    onCardNumberChange(formattedCardNumber);
  };

  const formatCardNumber = (input: string) => {
    // Elimina cualquier caracter no numérico
    const numericValue = input.replace(/\D/g, '');

    // Limita la cadena a 16 caracteres y agrega guiones cada 4 dígitos
    const formattedCardNumber = numericValue
      .slice(0, 16)
      .replace(/(\d{4})(\d{0,4})(\d{0,4})(\d{0,4})/, '$1-$2-$3-$4')
      .replace(/-+$/, ''); // Elimina guiones al final de la cadena

    return formattedCardNumber;
  };

  return (
    <div className='cols-span-12 md:col-span-12'>
      <Label>Número de Tarjeta</Label>
      <TextInput placeholder='xxxx-xxxx-xxxx-xxxx' value={cardNumber} onChange={handleCardNumberChange} />
    </div>
  );
}

export default CardNumberInput;
