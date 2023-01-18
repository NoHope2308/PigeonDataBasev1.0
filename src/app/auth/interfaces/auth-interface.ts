export interface AuthResponse {
  ok: boolean,
  uid?: string,
  name?: string,
  token?: string,
  msg?: string,
  country?: string,
  phone?: number,
  city?: string
}

export interface User {
  uid: string | null,
  name: string | null,
  phone: number | null
}