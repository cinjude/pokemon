import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PokeAp = () => {
 
    const [ pokemon, setPokemon ] = useState( {} )
    const [ changeHectogram, setChangeHectogram ] = useState(true)
    const [ isDecimetres, setIsDecimetres ] = useState( true )
    
    useEffect(() => {
        const random = Math.floor( Math.random() * 600 )

        axios.get( `https://pokeapi.co/api/v2/pokemon/${random}/` )
        .then ( res => setPokemon( res.data ) )
    } ,[] )

    console.log( pokemon )

    
    const changeUnidades = () => {
        setChangeHectogram( !changeHectogram )
        setIsDecimetres( !isDecimetres )
    }

    const changePokemon = () => {

        const random = Math.floor( Math.random() * 600 )

        axios.get( `https://pokeapi.co/api/v2/pokemon/${random}/` )
        .then ( res => setPokemon( res.data ) )
    }
    

    return (
        <div className='poke'>
          <h1> { pokemon.name } </h1>
          <img src=  { pokemon.sprites?.other['official-artwork'].front_default }   alt="" />
        <div>   <b> weight: </b>{ changeHectogram? pokemon.weight : pokemon.weight/10 }
         { changeHectogram? " hectograms " : " kilograms "  } </div>
        <div> <b> height:  </b> { isDecimetres? pokemon.height : pokemon.height/10 } { isDecimetres?  "decimeters" : "meters" } </div>
        <div> <b> types:  </b> { pokemon.types?.[0].type.name } </div>
        
        <button onClick={changeUnidades} > Change Units</button>
        <button className='but' onClick={ changePokemon }> Change Poke </button>
      
            
        </div>
    );
};

export default PokeAp;