export interface BasicUser {
    id: number,
  }
  export interface User extends BasicUser {
    nume: string,
    prenume: string,
    email:string,
    parola: string,
    dataadaugare?:Date,
  }
  export interface UserWithDetails extends BasicUser, User{
    userId: number,
    user: User,
    
  }
  // tipurile astea de date sa fie in oglinda cu cele din backend si db