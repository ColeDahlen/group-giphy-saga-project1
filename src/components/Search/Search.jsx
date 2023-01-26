import ListItem from "./ListItem";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function Search () {
    const [searchInput, setSearchInput] = useState('')
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        dispatch({
            type: 'SAGA/GET_GIF',
            payload: searchInput
        })
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
            placeholder="Search"
            value={searchInput}
            onChange={e => setSearchInput (e.target.value)}
            />
            <button>Submit</button>
        </form>
        <ListItem />
        </>

    )
}

export default Search;