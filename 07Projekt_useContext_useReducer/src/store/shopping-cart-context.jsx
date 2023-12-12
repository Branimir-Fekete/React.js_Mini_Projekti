import { createContext, useReducer } from 'react';

// Uvoz privremenog niza proizvoda
import { DUMMY_PRODUCTS } from '../dummy-products';

// Stvaranje novog konteksta za košaricu
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

// Reducer funkcija za upravljanje stanjem košarice
function shoppingCartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = [...state.items]; // Kopija trenutnog stanja stavki

    // Traženje postojeće stavke u košarici
    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    // Ažuriranje ili dodavanje nove stavke u košaricu
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1, // Povećavanje količine
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload
      );
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      items: updatedItems,
    };
  }

  // Ažuriranje količine postojeće stavke u košarici
  if (action.type === 'UPDATE_ITEM') {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount; // Ažuriranje količine

    // Uklanjanje stavke iz košarice ako je količina 0 ili manja
    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    // Vraćanje ažuriranog stanja košarice
    return {
      ...state,
      items: updatedItems,
    };
  }

  return state;
}

// Komponenta pružatelja konteksta za košaricu
export default function CartContextProvider({ children }) {
  // Upotreba useReducer hooka za upravljanje stanjem košarice
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  // Funkcija za dodavanje stavke u košaricu
  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: 'ADD_ITEM',
      payload: id,
    });
  }

  // Funkcija za ažuriranje količine stavke u košarici
  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: 'UPDATE_ITEM',
      payload: {
        productId,
        amount,
      },
    });
  }

  // Priprema vrijednosti za pružanje kroz kontekst
  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };
  // Pružanje konteksta potomcima komponente
  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
