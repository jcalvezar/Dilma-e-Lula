import { createStore } from 'redux'

const initState = {
    maxTime: 30,
    isGameOver: false,
    actualMole: 0,
    score: 0
}

const myReducer = (state = initState, action) => {
    console.log(action);

    switch(action.type) {
        case 'ADD_SCORE': return {
            ...state,
            score: state.score + 1
        }
        case 'RESET_SCORE': return {
            ...state,
            score: 0
        }
        case 'SET_GAMEOVER': return {
            ...state,
            isGameOver: action.payload
        }
        case 'SET_ACTUALMOLE': return {
            ...state,
            actualMole: action.payload
        }
    }
    return state;
}

const store = createStore(myReducer);

/*
const linea1Action = { type: 'LINEA1', texto: 'Nueva Linea 1' }
const linea2Action = { type: 'LINEA2', texto: 'Nueva Linea 2' }

store.dispatch(linea1Action);
store.dispatch(linea2Action);
*/

export default store;