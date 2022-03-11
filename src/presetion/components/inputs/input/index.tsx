import React, { 
    useState, 
    InputHTMLAttributes 
} from 'react';

import { InputProps } from '../../../../domain/interfaces';
import { Input as InputStyled } from './styles';

export function Input<InputProps>({ ...props }) {
    return(
        <InputStyled {...props} />
    );
};