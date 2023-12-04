import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

// Definiranje funkcionalne komponente ResultModal s forwardRef
const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  // Kreiranje referenci za rad s dijalogom
  const dialog = useRef();

  // Provjera je li korisnik izgubio
  const userLost = remainingTime <= 0;

  // Računanje rezultata na temelju preostalog vremena
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  // Postavljanje funkcionalnosti za roditeljski komponent
  useImperativeHandle(ref, () => {
    return {
      open() {
        // Prikazivanje dijaloga
        dialog.current.showModal();
      },
    };
  });

  // Renderiranje dijela JSX koda u portalu
  return createPortal(
    <dialog
      ref={dialog}
      className='result-modal'
    >
      {/* Provjera je li korisnik izgubio */}
      {userLost && <h2>Izgubili ste</h2>}
      {!userLost && <h2>Vaš rezultat: {score}</h2>}
      <p>
        Ciljano vrijeme bilo je <strong>{targetTime} sekundi.</strong>
      </p>
      <p>
        Zaustavili ste tajmer s{' '}
        <strong>{formattedRemainingTime} preostalih sekundi.</strong>
      </p>
      <form
        method='dialog'
        onSubmit={onReset}
      >
        <button>Zatvori</button>
      </form>
    </dialog>,
    document.getElementById('modal') // Montiranje portala u određeni HTML element s ID-om 'modal'
  );
});

export default ResultModal;
