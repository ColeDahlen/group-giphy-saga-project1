import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
function Favorites() {
    const favorites = useSelector(store => store.favorites);
    // useEffect(() => {
    
    //   }, []);
     
    return (
        <>
        <h1>Favorites</h1>
        {
            favorites.map((favorite) =>{
                return <img key={favorite.id} src={favorite.url}/>
            })
        }
        </>
    )
}

export default Favorites;