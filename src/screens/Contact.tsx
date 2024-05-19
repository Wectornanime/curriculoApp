import { Linking, StyleSheet, Text, View } from 'react-native';

export default function Contact() {
    return (
        <View style={styles.container}>
            <Text>wectornanime.netlify.app</Text>
            <Text>wectornanime@gmail.com</Text>
            <Text>github.com/Wectornanime</Text>
            <Text>linkedin.com/in/Wectornanime-Nascimento</Text>
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
});
