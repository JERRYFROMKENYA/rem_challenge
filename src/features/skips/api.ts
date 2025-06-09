import {Skip} from "./types";

const API_URL = "https://app.wewantwaste.co.uk/api/skips/by-location";

export async function getSkipsByLocation(
  postcode: string,
  area: string = "",
): Promise<Skip[]> {
  const url = `${API_URL}?postcode=${encodeURIComponent(
    postcode,
  )}&area=${encodeURIComponent(area)}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch skips: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}
