import { StyleSheet, Text, View } from 'react-native';

export default function Education() {
    return (
        <View style={styles.container}>
            <Text style={styles.title2}>Educação</Text>
            <Text style={styles.title3}>Faculdade Senac PE</Text>
            <Text>Graduação - Análise e Desenvolvimento de Sistemas (manhã) | 2023-2025</Text>
            <Text style={styles.title3}>ETE - Professor Lucilo Ávila Pessoa</Text>
            <Text>Ensino Médio Téc. em Redes de Comp. | 2018 - 2020</Text>

            <Text style={styles.title2}>Idiomas</Text>
            <Text>- Português Nativo</Text>
            <Text>- Inglês Básico</Text>
            <Text>- Espanhol Básico</Text>

            <Text style={styles.title2}>Formação Complementar</Text>
            <Text>- Pacote Office</Text>
            <Text>- Introdução à Amazon AWS</Text>
            <Text>- Introdução à Microsoft Azure</Text>

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

    title3: {
        fontSize: 18,
        fontStyle: 'italic',
    },
});
