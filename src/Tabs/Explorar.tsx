import { ScrollView, Box } from "native-base";
import { CardConsulta } from "../components/CardConsulta";
import { Titulo } from "../components/Titulo";
import { Botao } from "../components/Botao";
import { EntradaTexto } from "../components/EntradaTexto";

const cards = [
    {
        id: 1,
        nome: "Dr. Cristian Borges",
        especialidade: "Dentista",
        foto: "https://avatars.githubusercontent.com/u/37422207?v=4"
    },
    {
        id: 2,
        nome: "Dr. Fernando Borges",
        especialidade: "Angiologista",
        foto: "https://avatars.githubusercontent.com/u/37422207?v=4"
    },
    {
        id: 3,
        nome: "Dr. Julia Rodrigues",
        especialidade: "Odontologisca",
        foto: "https://avatars.githubusercontent.com/u/37422207?v=4"
    }
]

export default function Explorar() {
    return (
        <ScrollView p={5}>
            <Box w="100%" borderRadius="lg" p={3} mt={10} shadow="1" borderRightRadius="md">
                <EntradaTexto placeholder="Digite a especialidade"></EntradaTexto>
                <EntradaTexto placeholder="Digite sua localização"></EntradaTexto>
                <Botao mt={3} mb={3}>
                    Buscar
                </Botao>
            </Box>
            <Titulo color="blue.500" mb={5}>Resultado da busca</Titulo>

            {cards.map((card) => (
                <CardConsulta key={card.id}
                    nome={card.nome}
                    especialidade={card.especialidade}
                    foto={card.foto}
                ></CardConsulta>
            ))}

        </ScrollView>
    )
}