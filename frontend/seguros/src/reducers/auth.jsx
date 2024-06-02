export const initialState = { 
  isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
  user: JSON.parse(localStorage.getItem('user')) || null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('user', JSON.stringify(action.payload));
      return { ...state, isLoggedIn: true, user: action.payload };
    case 'LOGOUT':
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('user');
      return { ...state, isLoggedIn: false, user: null };
    default:
      return state;
  }
};


/* import { UserContext } from "../context/UserContext";

// Intenta recuperar el estado de localStorage, si no existe usa false como estado inicial
export const initialState = { isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false };

export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true };
    case 'LOGOUT':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}; */