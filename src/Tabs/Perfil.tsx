import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../components/Titulo";

export default function Perfil() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color="blue.500">Meu perfil</Titulo>
                <Avatar source={{ uri: "https://avatars.githubusercontent.com/u/37422207?v=4" }} mt={5} size="xl"/>
                <Titulo color="blue.500">Informações pessoais</Titulo>
                <Titulo fontSize="lg" mb={1}>Cristian Michel</Titulo>
                <Text>03/02/2000</Text>
                <Text>Ijui- RS</Text>
                <Divider mt={5} />
                <Titulo color="blue.500" mb={1}>Histórico médico</Titulo>
                <Text>Bronquite</Text>
                <Text>Tireóide</Text>
            </VStack>
        </ScrollView>
    )
}