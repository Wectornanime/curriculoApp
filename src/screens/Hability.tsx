import { StyleSheet, Text, View } from 'react-native';

export default function Hability() {
    return (
        <View style={styles.container}>
            <Text style={styles.title2}>Habilidades</Text>
            <View>
                <Text>- Bancos de dados relacionais, MySQL;</Text>
                <Text>- Tecnologias frontend, HTML, CSS, Javascript e Typescript;</Text>
                <Text>- Frameworks modernos, React e Angular;</Text>
                <Text>- Desenvolvimento de API restful em Python com Flask, criação e consumo;</Text>
                <Text>- Desenvolvimento de API restful em NodeJs com NestJs, criação e consumo;</Text>
                <Text>- Comunicação;</Text>
                <Text>- Curiosidade;</Text>
                <Text>- Pensamento crítico.</Text>
            </View>
            <Text style={styles.title2}>Linguagens de programação</Text>
            <View>
                <Text>- Python3</Text>
                <Text>- JavaScript</Text>
                <Text>- TypeScript</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 25,
        paddingTop: 20,
    },
    
    title2: {
        fontSize: 24,
        textAlign: 'center',
    },
});
