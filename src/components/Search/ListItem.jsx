import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './ListItem.css'

function ListItem({ gif }) {

    const dispatch = useDispatch();

    //piece of state to add to the favorites table? idk if this will work
    const [favorite, setFavorite] = useState(false);

    const addToFavorites = () => {
        dispatch({
            type: 'SAGA/ADD_FAVORITES',
            payload: gif.images.fixed_height.url
            //need payload
        })
        setFavorite(true);
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
              <div></div>
              }
                
            </section>
        </>
    )
}

export default ListItem;