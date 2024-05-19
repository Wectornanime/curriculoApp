import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Experience() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title3}>Residência Tecnológica Porto Digital - KickOff</Text>
                <Text style={{ fontStyle: 'italic' }}>Porto Digital | Abr. 2023 - Jun. 2023</Text>
                <View style={styles.detailsContainer}>
                    <Text>- Desenvolvimento de solução inovadora ultilizando metodologia Ágil.</Text>
                    <Text>- prototipagem de baixa/alta fidalidade da aplicação.</Text>
                </View>

                <Text style={styles.title3}>Residência Tecnológica Porto Digital - RiseUp</Text>
                <Text style={{ fontStyle: 'italic' }}>Daccord | Ago. 2023 - Dez. 2023</Text>
                <View style={styles.detailsContainer}>
                    <Text>- Desenvolvimento de solução inovadora.</Text>
                    <Text>- Desenvolvimento mobile com Android Studio e Kotlin.</Text>
                </View>

                <Text style={styles.title3}>Estágio - Desenvolvedor backend</Text>
                <Text style={{ fontStyle: 'italic' }}>Senac PE | Jan. 2023 - Atualmente</Text>
                <View style={styles.detailsContainer}>
                    <Text>- Desenvolvimento e manutenção de aplicações backend.</Text>
                    <Text>- Desenvolvimento de aplicação web com Angular.</Text>
                    <Text>- Manutenção de aplicativo mobile com Flutter</Text>
                </View>

                <Text style={styles.title3}>Residência Tecnológica Porto Digital - GrowUp</Text>
                <Text style={{ fontStyle: 'italic' }}>Ferreira costa | Março 2024 - Maio 2024</Text>
                <View style={styles.detailsContainer}>
                    <Text>- Desenvolvimento de API restful.</Text>
                    <Text>- Desenvolvimento backend com C# ultilizando Entity Framework.</Text>
                </View>
            </View>
        </ScrollView>
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
        fontWeight: '500',
    },

    detailsContainer: {
        paddingLeft: 15
    }
});
