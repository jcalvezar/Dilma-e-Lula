import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Boton = (props) => {
    return  (
            <TouchableOpacity onPress={props.accion} style={styles.botonContainer}>
                <Text style={styles.botonTexto}>{props.texto}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botonContainer: {
        elevation: 8,
        backgroundColor: '#f9d71c',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    botonTexto: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})

export default Boton;