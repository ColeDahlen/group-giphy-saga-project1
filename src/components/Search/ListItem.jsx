import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './ListItem.css'

function ListItem({ gif }) {

    const dispatch = useDispatch();

    

    //piece of state to add to the favorites table? idk if this will work
    const [favorite, setFavorite] = useState(false)

    const favorites = useSelector(store => store.favorites);

    const addToFavorites = () => {
        dispatch({
            type: 'SAGA/ADD_FAVORITES',
            payload: gif.images.fixed_height.url
            //need payload
        })
        setFavorite(true);
    }
    const deleteFavorite = () =>{
        dispatch({
            type: 'SAGA/DELETE_FAVORITE',
            payload: gif.images.fixed_height.url
        })
    }

    return (
        <>
            <section className="card">
                <img src={gif.images.fixed_height.url} />
              {!favorite ?
              <button onClick={addToFavorites}>favorite</button>
              :
              //this can eventually be a function that removes from favorites maybe?
              //so it will be a delete function
              <button onClick={deleteFavorite}>remove</button>
              }
                
            </section>
        </>
    )
}

export default ListItem;