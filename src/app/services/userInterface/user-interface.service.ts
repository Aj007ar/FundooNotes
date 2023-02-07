export interface IloginRes {
  created: string;
  email: string;
  firstName: string;
  id: string;
  imageUrl: string;
  lastName: string;
  role: string;
  ttl: number;
  userId: string
}

export interface ILogin {
  email: string;
  password: string;
}
export interface IRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  service: string;
}
export interface IForget {
  email: string;
  service: string;
}
export interface Ireset {
  password: string;
  service: string;
}

export interface INote {
  title: string;
  description: string;
  color?: string;
}