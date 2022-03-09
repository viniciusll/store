import React, { 
    useState, 
    InputHTMLAttributes 
} from 'react';

import { InputProps } from '../../../../domain/interfaces';
import { InputContainer } from './styles';

export function Input<InputProps>({ ...props }) {
    return(
        <InputContainer>
            <input {...props} />
        </InputContainer>
    );
};