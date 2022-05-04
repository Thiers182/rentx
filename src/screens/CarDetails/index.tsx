import React from 'react';
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
  About,
  Acessories,
  Footer,
} from './styles';

export function CarDetails(){
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

        <About>
        Este é automóvel desportivo. Surgiu do lendário 
        touro de lide indultado na praça Real Maestranza de Sevilla. 
        É um belíssimo carro para quem gosta de acelerar.
        </About>
        <About>
        Este é automóvel desportivo. Surgiu do lendário 
        touro de lide indultado na praça Real Maestranza de Sevilla. 
        É um belíssimo carro para quem gosta de acelerar.
        </About>
        <About>
        Este é automóvel desportivo. Surgiu do lendário 
        touro de lide indultado na praça Real Maestranza de Sevilla. 
        É um belíssimo carro para quem gosta de acelerar.
        </About>
        
      </Content>

      <Footer>
        <Button title='Confirmar'/>
      </Footer>
       

    </Container>
  );
}