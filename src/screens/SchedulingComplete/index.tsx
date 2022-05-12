import React from 'react';
import { useWindowDimensions, StatusBar } from 'react-native'; //useWindowDimensions - consigo usar em funções. Dimensions consigo usar em styled components
import { useNavigation, ParamListBase, NavigationProp } from '@react-navigation/native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import { ConfirmButton } from '../../Components/ConfirmButton';

import { 
   Container,
   Content,
   Title,
   Message,
   Footer,
} from './styles';


export function SchedulingComplete(){
  const {width} = useWindowDimensions(); // paga pegar a dimensão do celular


  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  function handleConfirme(){
    navigation.navigate('Home')
  }

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
      <LogoSvg width={width}/>

      <Content>
        <DoneSvg width={80} height={80}/>
        <Title>Carro alugado</Title>

        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária da {'\n'}
          pegar seu automóvel {'\n'}
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title='OK' onPress={handleConfirme}/>
      </Footer>

    </Container>
  );
}