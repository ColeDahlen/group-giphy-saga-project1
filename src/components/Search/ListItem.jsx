import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './ListItem.css'

function ListItem() {

    const dispatch = useDispatch();

    

    //piece of state to add to the favorites table? idk if this will work
    const [favorite, setFavorite] = useState(false)

    //const import 

    const addToFavorites = () => {
        dispatch({
            type: 'SAGA/ADD_FAVORITES',
            //need payload
            
        })
        setFavorite = true;
    }

    return (
        <>
            <section className="card">
                <section className="img">
                    {/* still need to give image a source */}
                    <img/>
                </section>

                <button onClick={addToFavorites}>favorite</button>
            </section>
        </>
    )
}

export default ListItem;