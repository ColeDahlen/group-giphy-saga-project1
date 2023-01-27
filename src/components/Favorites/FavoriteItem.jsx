import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function FavoriteItem({favorite}){
    const dispatch = useDispatch();

    const [category, setCategory] = useState('');

    const deleteFavorite = () =>{
        dispatch({
            type: 'SAGA/DELETE_FAVORITE',
            payload: favorite.id
        })
    }

    const addFunny = () => {
        setCategory('funny');
        dispatch({
            type: 'SAGA/ADD_CATEGORY',
            payload: {category: 1, id: favorite.id}
        })
    }

    return(
        <>
        <h2>Category: {category}</h2>
         <img src={favorite.url}/>
         <button onClick={deleteFavorite}>Delete</button>

        <button onClick={addFunny}>funny</button>
        {/* <button onClick={addCohort}>cohort</button>
        <button onClick={addCartoon}>cartoon</button>
        <button onClick={addNsfw}>nsfw</button>
        <button onClick={addMeme}>meme</button> */}
        </>
    )
}
export default FavoriteItem