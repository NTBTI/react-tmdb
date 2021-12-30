import React from 'react';

//Styles
import { GlobalStyle } from './GlobalStyle';

//Components
//becuase we set this as default export, we do not need the name in the curly braces
import Header from './components/Header'; //becuase there is an index.js file, you do not need to name it or add the file extension
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <GlobalStyle />
    </div>
  );
}

export default App;
