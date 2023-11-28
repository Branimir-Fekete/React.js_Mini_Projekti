// Uvoz komponenata
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

import { useState } from 'react';

// Glavna funkcionalna komponenta App
function App() {
  // Postavljanje početnog stanja korisničkog unosa pomoću useState hooka
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  // Provjera valjanosti unosa
  const inputIsValid = userInput.duration >= 1;

  // Funkcija za rukovanje promjenama u korisničkom unosu
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      // Kloniranje prethodnog stanja i ažuriranje određenog identifikatora
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, // Pretvaranje vrijednosti u numerički tip
      };
    });
  }

  // Prikaz glavne aplikacije
  return (
    <>
      <Header /> {/* Prikaz zaglavlja */}
      <UserInput
        userInput={userInput}
        onChange={handleChange}
      />{' '}
      {/* Prikaz korisničkog unosa */}
      {!inputIsValid && <p className='center'>Unesite trajanje veće od nule</p>}
      {inputIsValid && <Results input={userInput} />}{' '}
      {/* Prikaz rezultata ako je unos valjan */}
    </>
  );
}

// Izvoz glavne komponente za upotrebu u drugim dijelovima aplikacije
export default App;
