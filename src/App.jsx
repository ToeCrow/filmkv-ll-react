// App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';  // Importera för routing
import Header from './Components/Header/Header'; // Importera Header-komponent
import Footer from './components/Footer/Footer'; // Importera Footer-komponent
import ShowStartPage from './Components/ShowStartPage/ShowStartPage'; // Din ShowStartPage-komponent
import Best200Movies from './Components/Best200Movies/Best200Movies';

const App = () => {
  return (
    <>
      <Header />  {/* Header visas på alla sidor */}
      
      <Routes>  {/* Definiera rutter här */}
        <Route path="/" element={<ShowStartPage />} />  
        <Route path="/200best" element={<Best200Movies />} />  
      </Routes>
      
      <Footer />  {/* Footer visas på alla sidor */}
    </>
  );
}

export default App;
