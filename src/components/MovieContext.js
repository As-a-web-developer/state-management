import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23122
        },
        {
            name: 'Wanted',
            price: '$10',
            id: 21123
        },
        {
            name: '3 idiots',
            price: '$10',
            id: 12332
        }
    ]);

    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
};