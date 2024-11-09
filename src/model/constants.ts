const API_KEY = import.meta.env.VITE_APP_API_KEY;

export const API_BASE_URL = "https://api.json-generator.com/";

export const API_HEADERS = {
  "Content-Type": "application/json",
  "Accept": "application/json",
  "Authorization": `Bearer ${API_KEY}`,
};

export const DATE_LOCALE = "ru";
