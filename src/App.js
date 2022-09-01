import React from 'react';
import './App.css';
import Nav from './components/Nav';
import MovieList from './components/MovieList';
import { MovieProvider} from './components/MovieContext';

function App() {
  return (
    <MovieProvider>
      <div className='App'>
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
