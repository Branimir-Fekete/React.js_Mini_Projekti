import { useRef, useState } from 'react';
import ResaultModal from './ResultModal';

// Definiranje funkcionalne komponente TimerChallenge
export default function TimerChallenge({ title, targetTime }) {
  // Kreiranje referenci za tajmer i dijalog
  const timer = useRef();
  const dialog = useRef();

  // Stanje preostalog vremena i provjera aktivnosti tajmera
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // Provjera je li vrijeme isteklo
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  // Resetiranje vremena na početnu vrijednost
  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  // Pokretanje tajmera
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  // Zaustavljanje tajmera i otvaranje dijaloga
  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  // Renderiranje dijela JSX koda
  return (
    <>
      {/* Prikazivanje dijaloga sa rezultatom */}
      <ResaultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />

      {/* Sekcija s izazovom */}
      <section className='challenge'>
        <h2>{title}</h2>

        {/* Prikazivanje ciljanog vremena izazova */}
        <p className='challenge-time'>
          {targetTime} sekunda{targetTime > 1 ? 'e' : ''}
        </p>
        <p>
          {/* Gumb za pokretanje ili zaustavljanje tajmera */}
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Zaustavi' : 'Pokreni'} Izazov
          </button>
        </p>
        {/* Prikazivanje stanja tajmera */}
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Vrijeme ističe...' : 'Tajmer neaktivan'}
        </p>
      </section>
    </>
  );
}
