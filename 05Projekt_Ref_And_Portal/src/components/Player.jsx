import { useState, useRef } from 'react';

// Definiranje funkcionalne komponente Player
export default function Player() {
  // Kreiranje reference za ime igrača
  const playerName = useRef();

  // Stanje unesenog imena igrača
  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  // Funkcija koja se poziva na klik gumba
  function handleClick() {
    // Postavljanje unesenog imena na vrijednost iz input polja
    setEnteredPlayerName(playerName.current.value);
    // Opcionalno: Postavljanje vrijednosti input polja na prazan string
    playerName.current.value = '';
  }

  // Renderiranje dijela JSX koda
  return (
    <section id='player'>
      {/* Prikazivanje naslova s pozdravom korisnika */}
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        {/* Input polje za unos imena igrača */}
        <input
          ref={playerName}
          type='text'
        />
        {/* Gumb za postavljanje imena igrača */}
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
