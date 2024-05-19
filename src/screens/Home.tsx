import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://github.com/Wectornanime.png' }} style={styles.image} />
            <Text style={styles.name}>Wectornanime</Text>
            <View>
                <Text>Idade: 21</Text>
                <Text>Ocupação: Estudante e desenvolvedor</Text>
                <Text>Experiência: 2 anos aproximadamente como aspirante desenvolvedor</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    name: {
        fontSize: 34
    },

    image: {
        height: 125,
        width: 125,
        borderRadius: 25
    },
});
