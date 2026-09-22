const API_URL = "https://api.untera.io/api/v1/listings/search";
const API_KEY = import.meta.env.VITE_UNTERA_API_KEY;

export async function getProperties() {
  const res = await fetch(
    `${API_URL}?country=PH&pageSize=50`,
    {
      headers: {
        "X-API-Key": API_KEY,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch properties");
  }

  const data = await res.json();

  return data.results;
}