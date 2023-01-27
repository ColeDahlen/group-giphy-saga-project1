import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './ListItem.css'

function ListItem() {

    const dispatch = useDispatch();

    

    //piece of state to add to the favorites table? idk if this will work
    const [favorite, setFavorite] = useState(false)

    const favorites = useSelector(store => store.favorites);

    const addToFavorites = () => {
        dispatch({
            type: 'SAGA/ADD_FAVORITES',
            //need payload
            
        })
        setFavorite(true);
    }

    return (
        <>
            <section className="card">
                <img />
              {!favorite ?
              <button onClick={addToFavorites}>favorite</button>
              :
              //this can eventually be a function that removes from favorites maybe?
              //so it will be a delete function
              <button>remove</button>
              }
                
            </section>
        </>
    )
}

export default ListItem;