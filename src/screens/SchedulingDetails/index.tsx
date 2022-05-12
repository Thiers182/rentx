import React from 'react';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useNavigation, ParamListBase, NavigationProp } from '@react-navigation/native';


import { BackButton } from '../../Components/BackButton';
import { ImageSlider } from '../../Components/ImageSlider';
import { Acessory } from '../../Components/Acessory';
import { Button } from '../../Components/Button'; 


import speedSvg from '../../assets/speed.svg'
import accelerationSpeedSvg from '../../assets/acceleration.svg'
import forceSvg from '../../assets/force.svg'
import gasolineSvg from '../../assets/gasoline.svg'
import exchangeSvg from '../../assets/exchange.svg'
import peopleSvg from '../../assets/people.svg'




import { 
  Container,
  Header, 
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Acessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';

export function SchedulingDetails(){
  const theme = useTheme();

  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  function handleConfirmeRental(){
    navigation.navigate('SchedulingComplete')
  }

  return (
    <Container>
      <Header>
        <BackButton onPress = {() => {}}/>
      </Header>

      <CarImages>
        <ImageSlider 
          imagesUrl={['https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/ff5a98a2-fd1e-4585-84a9-d91a5947d7d0/61f4cdfb-46ba-4ae9-8c08-3414e91094af.png']}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborguini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Acessories>
          <Acessory name ='380km/h' icon={speedSvg}/>
          <Acessory name ='3.2s' icon={accelerationSpeedSvg}/>
          <Acessory name ='800 HP' icon={forceSvg}/>
          <Acessory name ='Gasolina' icon={gasolineSvg}/>
          <Acessory name ='Auto' icon={exchangeSvg}/>
          <Acessory name ='2 pessoas' icon={peopleSvg}/>
        </Acessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather 
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>

          <Feather 
              name="chevron-right"
              size={RFValue(10)}
              color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>21/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 1740</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
  
      </Content>

      <Footer>
        <Button 
          title='Alugar agora'
          onPress={handleConfirmeRental}
          color={theme.colors.sucess}
        />
      </Footer>
       
    </Container>
  );
}