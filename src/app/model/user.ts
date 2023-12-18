export interface Post {
    userId: number;
    id: number;
    title: String;
    body: string;
  }

export interface User {
  id: number;
  username: string;
  email: string;
  phone: string;
  name: string;
}

export interface Order {
  orderId: string,
  address: string,
  status: string,
  date: string,
}