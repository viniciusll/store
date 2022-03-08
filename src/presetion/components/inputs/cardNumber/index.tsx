import React, { 
  useState, 
  InputHTMLAttributes 
} from 'react';

import { InputProps } from '../../../../domain/interfaces';
import { CardNumberContainer } from './styles';

export function CardNumberMask<InputProps>() {
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  function maskCardExpirationDate(value: string) {
    setExpirationDate(() => {
      return value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d{2})$/g, '$1/$2');
    });
  };

  function maskCardVerification(value: string) {
    setCvv(() => {
      return value
        .replace(/\D/g, '');
    })
  };

  return (
    <CardNumberContainer>
        <input type="number" placeholder="Número do cartão" />
        <input 
          className="dateValidate" 
          type="text" 
          placeholder="MM/YY"
          value={expirationDate}
          onChange={
            (e) => maskCardExpirationDate(e.target.value)
          }
          maxLength={4}
        />
        <input 
          className="cvv"  
          placeholder="CVV / CVC" 
          maxLength={4}
          value={cvv}
          onChange={(e) => maskCardVerification(e.target.value)}
        />
    </CardNumberContainer>
  );
};