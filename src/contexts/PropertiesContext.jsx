import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { delay } from "../utils/delay";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const BASE_URL = "http://localhost:8000";
const PropertiesContext = createContext();
const initialState = {
  properties: [],
  isLoading: false,
  error: "",
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: action.payload,
      };

    case "properties/loaded":
      return {
        ...state,
        isLoading: false,
        properties: action.payload,
      };

    case "favorites/add":
      return {
        ...state,
        isLoading: false,
        favorites: [...state.favorites, action.payload],
      };

    case "favorites/remove":
      return {
        ...state,
        isLoading: false,
        favorites: state.favorites.filter(
          (favorite) => favorite !== action.payload,
        ),
      };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error("Unknown Action Type!");
  }
}

function PropertiesProvider({ children }) {
  const [{ properties, isLoading, error, favorites }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  // const [properties, setProperties] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState("");
  // const [favorites, setFavorites] = useLocalStorageState([], "favorites");

  const favoriteProperties = properties.filter((property) =>
    favorites.includes(property.id),
  );

  async function fetchProperties() {
    try {
      dispatch({ type: "rejected", payload: "" });
      dispatch({ type: "loading", payload: true });
      const res = await fetch(`${BASE_URL}/properties`);
      const data = await res.json();
      await delay(import.meta.env.DEV ? 1000 : 0);
      dispatch({ type: "properties/loaded", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There is some error loading Properties...",
      });
    } finally {
      dispatch({ type: "loading", payload: false });
    }
  }

  useEffect(() => {
    fetchProperties();
  }, []);

  function addFavorites(id) {
    dispatch({ type: "favorites/add", payload: id });
  }

  function removeFavorites(id) {
    dispatch({ type: "favorites/remove", payload: id });
  }

  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      removeFavorites(id);
    } else {
      addFavorites(id);
    }
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        isLoading,
        error,
        toggleFavorite,
        favoriteProperties,
        favorites,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
}

function useProperties() {
  const context = useContext(PropertiesContext);
  if (!context) {
    throw new Error("PropertiesContext was used outside the PropertiesContext");
  }
  return context;
}

export { PropertiesProvider, useProperties };
