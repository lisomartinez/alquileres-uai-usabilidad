export interface User {
  name: string
  lastName: string
  email: string
  password: string
  birthDate: string
}

export interface Place {
  id: string
  address: string
  town: string
  capacity: number
  rooms: number
  rest: number
  price: number
  description: string
}
