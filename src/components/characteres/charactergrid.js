import React from 'react';
import CharacterItem from './characteritem';
import Spinner from '../components ui/spinner';

const CharacterGrid = ({items, isloading}) => {
    return  isloading ? (<Spinner/>) : <section className='cards'>
        {items.map(item=> (
            <CharacterItem key={item.char_id} item={item}/>
        ))}
    </section>
       
}

export default CharacterGrid
