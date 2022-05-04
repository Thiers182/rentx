import React from 'react';
import { Feather } from '@expo/vector-icons'; 
import { useTheme } from 'styled-components'
import {TouchableOpacityProps} from 'react-native'

import { 
   Container,
} from './styles';

interface Props extends TouchableOpacityProps{
  color?:string; // a interrogação quer dizer que a cor é opcional!!
}

export function BackButton({color, ...rest}:Props){
  const theme = useTheme();
  return (
    <Container {...rest}>
      <Feather name="chevron-left" 
      size={24} 
      color={color ? color : theme.colors.text} //lê-se: caso seja informado a cor, use esta cor, caso contrário use a cor de txto
    /> 
    </Container>
  );
}