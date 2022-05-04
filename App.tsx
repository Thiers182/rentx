import React from 'react';
import AppLoading from 'expo-app-loading';
import {ThemeProvider} from 'styled-components' // utilizado para poder usar o Theme criado por nós

import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo'

import {
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter'

import { Scheduling } from './src/screens/Scheduling';
import theme from './src/styles/theme';

export default function App() {
  const [fontsLoded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  });

  //
  if(!fontsLoded){
    return <AppLoading />
  }

  return (
    //o theme provider vai buscar o tema que criamos, por isto pereceba que o theme foi importado
    <ThemeProvider theme={theme}>
      <Scheduling/>

    </ThemeProvider>
  )
}

