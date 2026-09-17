const configuredApiBaseUrl =
  import.meta.env.VITE_API_BASE_URL ||
  (typeof window !== "undefined" && window.location.hostname === "localhost"
    ? "http://localhost:4000"
    : "https://soil-farming-agent.onrender.com");

export const API_BASE_URL = configuredApiBaseUrl.replace(/\/$/, "");

