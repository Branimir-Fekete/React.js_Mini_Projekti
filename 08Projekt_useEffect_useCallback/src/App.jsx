import { useRef, useState, useEffect, useCallback } from 'react';
import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';

// Učitavanje spremljenih ID-ova mjesta iz lokalne pohrane
const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
const storedPlaces = storedIds.map((id) =>
  AVAILABLE_PLACES.find((place) => place.id === id)
);

function App() {
  const selectedPlace = useRef(); // Ref za praćenje odabranog mjesta
  const [modalIsOpen, setModalIsOpen] = useState(false); // Stanje za modalni prozor
  const [availablePlaces, setAvailablePlaces] = useState([]); // Dostupna mjesta
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces); // Odabrana mjesta

  // Učitavanje i sortiranje mjesta prema udaljenosti
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );

      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  // Funkcija za započinjanje uklanjanja mjesta
  function handleStartRemovePlace(id) {
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  // Funkcija za zaustavljanje uklanjanja mjesta
  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  // Funkcija za odabir mjesta
  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem(
        'selectedPlaces',
        JSON.stringify([id, ...storedIds])
      );
    }
  }

  // Funkcija za uklanjanje mjesta korištenjem useCallback-a
  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setModalIsOpen(false);

    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    localStorage.setItem(
      'selectedPlaces',
      JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current))
    );
  }, []);

  // JSX povratna vrijednost komponente
  return (
    <>
      // Modalni prozor za potvrdu brisanja
      <Modal open={modalIsOpen}>
        {modalIsOpen && (
          <DeleteConfirmation
            onCancel={handleStopRemovePlace}
            onConfirm={handleRemovePlace}
          />
        )}
      </Modal>
      <header>
        <img
          src={logoImg}
          alt='Stylized globe'
        />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title='Available Places'
          places={availablePlaces}
          fallbackText='Sorting places by distance....'
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
