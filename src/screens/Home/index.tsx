import { useNavigation, ParamListBase, NavigationProp } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

//por padrão o react native não abre svg, necessita=se da instalação de uma biblioteca react-native-svg-trnaformer
import Logo from '../../assets/logo.svg';

import { Car } from '../../Components/Car';

import { 
   Container,
   Header,
   TotalCars,
   HeaderContent,
   CarList,
} from './styles';



export function Home(){

  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  
  const carData = {
    brand:'Audi',
    name:'RS 5 Coupé',
    rent:{
      period: 'Ao dia',
      price: 120,
    },
    thumbnail:'https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/ff5a98a2-fd1e-4585-84a9-d91a5947d7d0/61f4cdfb-46ba-4ae9-8c08-3414e91094af.png'
    
  };

  function handleCarDetails(){
    navigation.navigate('CarDetails')
  }

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Header>
        
        <HeaderContent>

            <Logo 
              width={RFValue(108)}
              height={RFValue(12)}
            />

            <TotalCars>
              Total de 12 Carros  
            </TotalCars>  

         </HeaderContent>
      </Header>
      <CarList
        data = {[1,2,3,4,5,6,7]}
        keyExtractor = {item => String(item)}
        renderItem={({item}) => 
           <Car data={carData} onPress={handleCarDetails}/>}
      />
 

    </Container>
  );
}