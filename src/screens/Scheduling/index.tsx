import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation, ParamListBase, NavigationProp } from '@react-navigation/native';

import { BackButton } from '../../Components/BackButton';
import { Button } from '../../Components/Button';
import { Calendar } from '../../Components/Calendar';


import ArrowSvg from '../../assets/arrow.svg';

import { 
   Container,
   Header,
   Title,
   RentalPeriod,
   DateInfo,
   DateTitle,
   DateValue,
   Content,
   Footer,
   

} from './styles';

export function Scheduling(){
  const theme = useTheme();

  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  function handleConfirmeRental(){
    navigation.navigate('SchedulingDetails')
  }

  return (
    <Container>
      <Header>

        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />

        <BackButton 
          onPress = {() => {}}
          color= {theme.colors.shape}
        />

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>
        
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>
              18/06/2021
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>
              18/06/2021
            </DateValue>
          </DateInfo>
        </RentalPeriod>

      </Header>

      <Content>
        <Calendar/> 
      </Content>

      <Footer>
        <Button 
          title="Confirmar" 
          onPress={handleConfirmeRental}
        />
      </Footer>


    </Container>
  );
}