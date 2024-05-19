import { StyleSheet, Text, View } from 'react-native';

export default function Aboutme() {
    return (
        <View style={styles.container}>
            <Text>Ola, sou Wectornanime, tenho 21 anos de idade, sou técnico em redes de computadores pela ETE - Lucilo Ávila Pessoa, e tualmente estudo Análise e Desenvolvimento de Sistemas na Faculdade Senac PE, pelo programa Embarque Digital. Estou sempre buscando praticar e melhorar minhas habilidadese, além de conhecer novas tecnologias. Atualmente, trabalho como estagiário do Senac no Cartão do Empresário, onde colaboro como desenvolvedor backend, já atuei em projetos com flutter e angular, que me permitiram ampliar minha experiencia pratica, alem de conhecer novas tecnologias.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
});
