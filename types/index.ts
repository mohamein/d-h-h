export interface Ardiyada {
  place: string;
  telephone: string;
  receipt_code: string;
  receipt_number: string;
  receipt_date: string; // Use `Date` if you plan to convert it on client side
  cabbirka: string;
  tax_ref: string;
  receivedFrom: string;
  dhisan: string;
  total_amount: string;
  amount_in_words: string;
}

export interface User {
  username: string;
  email: string;
  password: string;
  phone: string;
}

export interface LoginUser {
  email: string;
  password: string;
}
