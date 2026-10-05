const API_URL = "https://api.untera.io/api/v1/listings/search";
const API_KEY = import.meta.env.VITE_UNTERA_API_KEY;

export async function getProperties(filters = {}) {
  const params = new URLSearchParams();

  params.set("country", "PH");
  params.set("pageSize", "50");

  if (filters.location) {
    params.set("location", filters.location);
  }

  if (filters.minPrice) {
    params.set("minPrice", filters.minPrice);
  }

  if (filters.maxPrice) {
    params.set("maxPrice", filters.maxPrice);
  }

  if (filters.bedrooms) {
    params.set("minBeds", filters.bedrooms);
  }

  if (filters.bathrooms) {
    params.set("minBaths", filters.bathrooms);
  }

  if (filters.propertyType) {
    params.set("type", filters.propertyType);
  }

  if (filters.transaction) {
    params.set("transaction", filters.transaction);
  }

  const res = await fetch(`${API_URL}?${params.toString()}`, {
    headers: {
      "X-API-Key": API_KEY,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch properties");
  }

  const data = await res.json();

  return data.results;
}