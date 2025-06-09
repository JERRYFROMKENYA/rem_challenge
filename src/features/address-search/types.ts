export interface AddressItem {
  Description?: string;
  Id: string;
  Highlight?: string;
  Text: string;
  Type?: string;
}

export interface AddressResponse {
  Items: AddressItem[];
}
