export interface User {
  id: number;
  username: string;
  email: string;
  phone: string;
}

export interface Order {
  id: string,
  address: string,
  weight: number,
  quantity: number,
  oderDate: string,
  oderStatus: string,
}

export interface OrderReq {
  id: string,
  address: string,
  weight: number,
  quantity: number,
  oderDate: string,
  oderStatus: string,
}

