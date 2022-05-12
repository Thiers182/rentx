import React from 'react';
import { useTheme } from 'styled-components'

import { 
   Container,
   Title,
} from './styles';

interface Props{
  title:string;
  color?:string; // deixo em aberto (?), ou seja, caso não seja infrmado ele irá pegar uma cor padrão
  onPress: () => void;
} 

export function Button({
  title,
  color,
  onPress,
}: Props){

  const theme = useTheme();

  return (
    <Container 
      color = {color ? color: theme.colors.main}
      onPress={onPress}
    >
      <Title>{title}</Title>
    </Container>
  );
}