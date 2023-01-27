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
        dispatch({
            type: 'SAGA/ADD_CATEGORY',
            payload: {category: 1, id: favorite.id}
        })
    }

    const addCohort = () => {
        dispatch({
            type: 'SAGA/ADD_CATEGORY',
            payload: {category: 2, id: favorite.id}
        })
    }

    const addCartoon = () => {
        dispatch({
            type: 'SAGA/ADD_CATEGORY',
            payload: {category: 3, id: favorite.id}
        })
    }

    const addNsfw = () => {
        dispatch({
            type: 'SAGA/ADD_CATEGORY',
            payload: {category: 4, id: favorite.id}
        })
    }

    const addMeme = () => {
        dispatch({
            type: 'SAGA/ADD_CATEGORY',
            payload: {category: 5, id: favorite.id}
        })
    }

    const showCategory = () => {
        if (favorite.category_id === 1) {
            return 'Funny'
        }
        if (favorite.category_id === 2) {
            return 'Cohort'
        }
        if (favorite.category_id === 3) {
            return 'Cartoon'
        }
        if (favorite.category_id === 4) {
            return 'NSFW'
        }
        if (favorite.category_id === 5) {
            return 'Meme'
        }
    }


    return(
        <>
       
        <h2>Category: {showCategory()}</h2>
         <img src={favorite.url}/>
         <button onClick={deleteFavorite}>Delete</button>

        <button onClick={addFunny}>funny</button>
        <button onClick={addCohort}>cohort</button>
        <button onClick={addCartoon}>cartoon</button>
        <button onClick={addNsfw}>nsfw</button>
        <button onClick={addMeme}>meme</button>
        </>
    )
}
export default FavoriteItem