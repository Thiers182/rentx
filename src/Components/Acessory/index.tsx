import React from 'react';
import {SvgProps} from 'react-native-svg'

import { 
   Container,
   Name
} from './styles';

interface Props {
  name: string;
  icon: React.FC<SvgProps> 
}

export function Acessory({
  name,
  icon: Icon //coloquei o icon com letra maiúscula para poder criar um componente
}: Props){
  return (
    <Container>
      <Icon
        width={32}
        height={32}
      />
      <Name>{name}</Name>

    </Container>
  );
}