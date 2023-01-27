import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function FavoriteItem({favorite}){
    const dispatch = useDispatch();
    const deleteFavorite = () =>{
        dispatch({
            type: 'SAGA/DELETE_FAVORITE',
            payload: favorite.id
        })
    }
    return(
        <>
         <img src={favorite.url}/>
         <button onClick={deleteFavorite}>Delete</button>
        </>
    )
}
export default FavoriteItem