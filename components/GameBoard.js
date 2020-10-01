import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, Image, Linking, TouchableOpacity } from 'react-native';
import Square from './Square'
import Boton from './Boton';
//import { setActualMole, setGameover, addScore } from '../redux'
import { connect } from 'react-redux'
import titulo from '../assets/whacka/titulo.png'

const GameBoard = (props) => {
    
    const [timeLeft, setTimeLeft] = useState(props.maxTime);
    const timer = () => { 
        setTimeLeft(timeLeft -1);
        const mole = Math.floor(Math.random() * 12);
     
        props.setActualMole(mole);
        console.log('AFTER Actual Mole: ',props.actualMole);
        //props.addScore();
    }

    const restart = () => {
        
        props.setGameover(false);
        setTimeLeft(props.maxTime);
        props.resetScore();
    }

    const ajudar = () => {
        Linking.openURL('https://jcalvez.info/ajuda/');
    }

    const items = []
    for(let i=0;i<12;i++) {
        items.push(<Square key={i.toString()} jkey={i}/>);
        
    }

    useEffect( () => {
        if (timeLeft <= 0) {
            props.setGameover(true);
            return;
        }
        const id = setInterval(timer, 1000);
        return () => clearInterval(id);
        
    }, [timeLeft])

    return (
        <ImageBackground
            source={require('../assets/whacka/fondo.png')}
            style={styles.container}
        >
            <Image source={titulo} resizeMode='contain' style={styles.titulo}/>
            <Text style={styles.texto}>Tempo: {timeLeft}</Text>
            <Text style={styles.texto}>Pontos: {props.score}</Text>
            { !props.isGameOver ? (
                <View style={styles.game}>
                    {items}
                </View>
            ) : (<View style={styles.fim}>
                    <Boton accion={restart} texto={'Reiniciar'} />
                    <Text style={styles.ajude}>{'Gostou do jogo? Ajude um\nargentino a sair da Argenzuela\nfazendo clique abaixo'}</Text>
                    <Boton texto="Ajudar" accion={ajudar}/>
                </View>
                )

            }
            
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 0
    },
    texto: {
      fontSize: 30,
      color: '#fff',
      fontWeight: 'bold'
    },
    game: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 300,
      paddingTop: 20,
      alignItems: 'center',
    },
    titulo: {
      width: '80%',
      maxHeight: 70,
      marginTop: 20
    },
    boton: {
      width: '50%'
    },
    ajude: {
      marginVertical: 30,
      fontSize: 15,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    fim: {
        marginTop: 50,
        alignItems: 'center',
    }
  });

const mapStateToProps = state => {
    return {
        score: state.score,
        maxTime: state.maxTime,
        isGameOver: state.isGameOver,
        actualMole: state.actualMole
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setGameover: (estado) => dispatch({type: 'SET_GAMEOVER', payload: estado}),
        setActualMole: (mole) => dispatch({type: 'SET_ACTUALMOLE', payload: mole}),
        addScore: () => dispatch({type: 'ADD_SCORE'}),
        resetScore: () => dispatch({type: 'RESET_SCORE'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
