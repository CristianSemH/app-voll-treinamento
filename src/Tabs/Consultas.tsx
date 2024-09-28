import { Divider, ScrollView } from "native-base";
import { CardConsulta } from "../components/CardConsulta";
import { Titulo } from "../components/Titulo";
import { Botao } from "../components/Botao";

export default function Consultas() {
    return (
        <ScrollView p={5}>
            <Titulo color="blue.500">Minhas consultas</Titulo>
            <Botao mt={5} mb={5}>Agendar novas consultas</Botao>
            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas consultas</Titulo>
            <CardConsulta
                nome="Dr. Cristian Borges"
                especialidade="Dentista"
                foto="https://avatars.githubusercontent.com/u/37422207?v=4"
                data="20/10/2024"
                isAgendado
            ></CardConsulta>
            <Divider mt={5} />
            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas passadas</Titulo>
            <CardConsulta
                nome="Dr. Cristian Borges"
                especialidade="Dentista"
                foto="https://avatars.githubusercontent.com/u/37422207?v=4"
                data="20/10/2024"
                isAtendido
            ></CardConsulta>
            <CardConsulta
                nome="Dr. Cristian Borges"
                especialidade="Dentista"
                foto="https://avatars.githubusercontent.com/u/37422207?v=4"
                data="20/10/2024"
                isAtendido
            ></CardConsulta>
            <CardConsulta
                nome="Dr. Cristian Borges"
                especialidade="Dentista"
                foto="https://avatars.githubusercontent.com/u/37422207?v=4"
                data="20/10/2024"
                isAtendido
            ></CardConsulta>
        </ScrollView>
    )
}