export interface Profile {
  id: number
  email: string
  firstname: string
  lastname: string
  password: string
  role: { 
    type: string
  }
}