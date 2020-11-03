import React from 'react';
import {Link} from 'react-router-dom'
import Rating from '../Rating/Rating';
import './MovieCard.css';

function MovieCard({item}) {
    
    return (
        
            <Link to={{ 
                  pathname: `/${item.id}`,
                  state: { item }
                }}>
        <div className='bloc'>
            <img src={item.posterUrl} alt={item.title} />
            <div className='info'>
                <h4>{item.title}</h4>
                <span><Rating searchrate={item.rate}/></span>
            </div>
            


        </div>
        </Link>
    )
}

export default MovieCard
