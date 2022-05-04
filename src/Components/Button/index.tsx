import React from 'react';

import { 
   Container,
   Title,
} from './styles';

interface Props{
  title:string;
  color?:string; // deixo em aberto (?), ou seja, caso não seja infrmado ele irá pegar uma cor padrão
} 

export function Button({
  title,
  color,
  ...rest
}: Props){
  return (
    <Container 
      {...rest} 
      color = {color}
      onPress = {() => {}}
    >
      <Title>{title}</Title>
    </Container>
  );
}