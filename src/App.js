import React from 'react';

//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Styles
import { GlobalStyle } from './GlobalStyle';

//Components
//becuase we set this as default export, we do not need the name in the curly braces
import Header from './components/Header'; //becuase there is an index.js file, you do not need to name it or add the file extension
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

const App = () => (
  <Router>
    <Header/>{/* This means the header appears everywhere */}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/:movieId' element={<Movie/>} />
      <Route path='/*' element={<NotFound/>} />
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;
