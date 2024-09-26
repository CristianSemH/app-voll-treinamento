import { VStack, Text } from "native-base";
import { CardConsulta } from "../components/CardConsulta";

export default function Consultas() {
    return (
        <VStack p={5}>
            <CardConsulta
                nome="Dr. Cristian Borges"
                especialidade="Dentista"
                foto="https://avatars.githubusercontent.com/u/37422207?v=4"
                data="20/10/2024"
                isAgendado
                isAtendido
            ></CardConsulta>
        </VStack>
    )
}