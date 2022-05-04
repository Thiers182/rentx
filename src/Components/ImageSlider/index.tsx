import React from 'react';

import { 
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage, 
} from './styles';

interface Props{
  imagesUrl: string[]; 
}

export function ImageSlider({imagesUrl}: Props){
  return (
    <Container>

      <ImageIndexes>
        <ImageIndex active = {true} /*relativo as bolinhas do slider */ />
        <ImageIndex active = {false}/>
        <ImageIndex active = {false}/>
        <ImageIndex active = {false}/>
      </ImageIndexes>
      
      <CarImageWrapper /*vai ser o embrulho */>

        <CarImage
          source = {{uri: imagesUrl[0]}}
          resizeMode='contain' //para imagem ficar ajustada ao tamanho que disponibilizaremos
        />

      </CarImageWrapper>


    </Container>
  );
}