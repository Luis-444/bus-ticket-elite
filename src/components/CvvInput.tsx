import React, { useState } from 'react';
import { Label, TextInput } from 'flowbite-react';
interface CvvInputProps {
    onCvvChange: (newCvv: string) => void;
  }

const CvvInput: React.FC<CvvInputProps> = ({ onCvvChange }) => {
  const [cvv, setCvv] = useState('');

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    const formattedCvv = formatCvv(inputText);
    setCvv(formattedCvv);
    onCvvChange(formattedCvv);
  };

  const formatCvv = (input: string) => {
    // Elimina cualquier caracter no numérico
    let numericValue = input.replace(/\D/g, '');
    //Max length of CVV is 3
    if (numericValue.length > 3) {
      numericValue = numericValue.slice(0, 3);
    }
    return numericValue;
  };

  return (
    <div className='cols-span-12 md:col-span-6'>
      <Label>CVV</Label>
      <TextInput type='password' placeholder='***' value={cvv} onChange={handleCvvChange} />
    </div>
  );
}

export default CvvInput;
