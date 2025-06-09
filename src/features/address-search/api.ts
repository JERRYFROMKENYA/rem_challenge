import { AddressResponse } from "./types";

export const getAddressFromSearch = async (
  search: string,
): Promise<AddressResponse> => {
  const url: string = `https://services.postcodeanywhere.co.uk/Capture/Interactive/Find/v1.00/json3ex.ws?Key=JP84-GY97-YZ96-GG45&Origin=GBR&Countries=GB&Limit=7&Language=en&Text=${search}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }

  return response.json();
};
