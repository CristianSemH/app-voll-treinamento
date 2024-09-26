import { Text, Image, Box, FormControl, Checkbox, ScrollView } from 'native-base';
import Logo from './assets/Logo.png';
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { Botao } from './components/Botao';
import { useState } from 'react';
import { sessions } from './utils/CadastroEntradaTexto';

export default function Cadastro() {

  const [numSession, setNumSession] = useState(0);



  const NextSession = () => {
    if (numSession < sessions.length - 1) {
      setNumSession(numSession + 1)
    }
  }

  const previousSession = () => {
    if (numSession > 0) {
      setNumSession(numSession - 1)
    }
  }

  return (
    <ScrollView flex={1} p={5} >

      <Image alignSelf="center" source={Logo} alt="Logo Voll" />

      <Titulo>
        {sessions[numSession].title}
      </Titulo>
      <Box>
        <FormControl mt={3}>
          {
            sessions[numSession].inputText?.map(input => {
              return <EntradaTexto key={input.id} label={input.label} placeholder={input.placeholder}></EntradaTexto>
            })
          }
          {numSession == 2 && <Text color="blue.800" fontWeight="bold" fontSize="md" mt={2} mb={2}>Selecione o plano:</Text>}
          {
            sessions[numSession].checkBox?.map(checkbox => {
              return <Checkbox key={checkbox.id} value={checkbox.value}> {checkbox.value}</Checkbox>
            })
          }
        </FormControl>
      </Box>
      {numSession > 0 &&
        <Botao onPress={previousSession} bgColor="gray.400">
          Voltar
        </Botao>
      }
      <Botao onPress={NextSession} mt={4} mb={20}>
        Avançar
      </Botao>
    </ScrollView>
  );
}
