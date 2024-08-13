import { shuffle } from "underscore";

/** 
 * Esta función crea un nuevo deck
 * @param { Array <String>} tiposDeCarta
 * @param { Array <String>} tiposEspeciales
 * @returns { Array <String> } Retorna un nuevo deck de cartas
 */

// Esta función crea un nuevo deck
const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error('tiposDeCarta es obligatorio');
   
    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error('tiposEspeciales es obligatorio');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }

    deck = shuffle( deck );
    
    return deck;

}

export default crearDeck;