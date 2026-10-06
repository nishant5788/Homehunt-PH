import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,

  reducers: {
    addFavorites(state, action) {
      state.favorites.push(action.payload);
    },

    removeFavorites(state, action) {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },

    toggleFavorites(state, action) {
      const existingFavorite = state.favorites.find(
        (item) => item.id === action.payload.id
      );

      if (existingFavorite) {
        state.favorites = state.favorites.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const {
  addFavorites,
  removeFavorites,
  toggleFavorites,
} = favoritesSlice.actions;

export const getFavorites = (state) => state.favorites.favorites;

export default favoritesSlice.reducer;