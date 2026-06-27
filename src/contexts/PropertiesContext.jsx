import { createContext, useContext, useEffect, useState } from "react";
import { delay } from "../utils/delay";

const BASE_URL = "http://localhost:8000";

const PropertiesContext = createContext();

function PropertiesProvider({ children }) {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchProperties() {
    // const controller = new AbortController();
    try {
      setError("");
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/properties`);
      const data = await res.json();

      await delay(import.meta.env.DEV ? 1000 : 0);

      setProperties(data);
    } catch {
      setError("There is some error loading Properties...");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
  fetchProperties();
}, []);

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        isLoading,
        error,
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
