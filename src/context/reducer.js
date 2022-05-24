export const initialState = {
  token: "",
  products: [],
  basket: [],
  favorites: [],
};
const Reducer = (state, action) => {
  switch (action.type) {
    case "REGISTER":
      localStorage.setItem("token", JSON.stringify(action.payload));
      return;
    case "GET_DATA_LIST":
      return {
        ...state,
        products: [...action.payload],
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "ADD_TO_FAVS":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FROM_BASKET":
      const newBasket = state.basket.filter((p) => p.id !== action.payload);
      return {
        ...state,
        basket: [...newBasket],
      };
    case "REMOVE_FROM_FAVS":
      const newFavs = state.favorites.filter((p) => p.id !== action.payload);
      return {
        ...state,
        favorites: [...newFavs],
      };
    default:
      return state;
  }
};

export default Reducer;
