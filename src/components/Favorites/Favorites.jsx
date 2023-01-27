import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import FavoriteItem from './FavoriteItem';
function Favorites() {
    const favorites = useSelector(store => store.favorites);
    // useEffect(() => {
    
    //   }, []);
    const deleteFavorite = () =>{
        dispatch({
            type: 'SAGA/DELETE_FAVORITE',
            payload: gif.images.fixed_height.url
        })
    }
     
    return (
        <>
        <h1>Favorites</h1>
        {
            favorites.map((favorite) =>{
                return(
                    <FavoriteItem key={favorite.id} favorite={favorite}/>
                    // <img key={favorite.id} src={favorite.url}/>
                )
                
            })
        }
        </>
    )
}

export default Favorites;