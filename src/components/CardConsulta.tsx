import { Text, Avatar, VStack } from "native-base";
import { Botao } from "./Botao";

interface CardPros {
    nome: string;
    foto: string;
    especialidade: string;
    data?: string;
    isAtendido?: boolean;
    isAgendado?: boolean;
}

export function CardConsulta({
    nome,
    foto,
    data,
    especialidade,
    isAgendado,
    isAtendido
}: CardPros) {
    return (
        <VStack
            w="100%"
            bg={isAtendido ? "blue.100" : "white"}
            p={5}
            borderRadius="lg"
            shadow={2}
        >
            <VStack flexDir="row">
                <Avatar source={{ uri: foto }} size="lg" />
                <VStack pl={4}>
                    <Text fontSize="md" bold>{nome}</Text>
                    <Text>{especialidade}</Text>
                    <Text>{data}</Text>
                </VStack>
            </VStack>
            <Botao mt={4}>
                {isAgendado ? 'Cancelar consulta' : 'Agendar consulta'}
            </Botao>
        </VStack>
    )
}