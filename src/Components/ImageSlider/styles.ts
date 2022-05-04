import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

interface ImageIndexProps{
  active:boolean;
}

export const Container = styled.View`
  width:100%;
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`;


export const ImageIndex = styled.View<ImageIndexProps>`
  width: 6px;
  height:6px;

  background-color: ${({theme, active}) => 
    active ? theme.colors.title : theme.colors.shape};
  
  margin-left: 8px;
  border-radius: 3px; //sempre que queira fazer algo redondo basta criar um border radius com a metade do tamanho do objeto
`;

// Dimensions pega a largura do dispositivo do usuário
export const CarImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: 132px; 

  justify-content: center;
  align-items:center;
`;

export const CarImage = styled.Image`
  width: 280px;
  height: 132px;
`;
