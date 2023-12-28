export interface User {
  id: number;
  username: string;
  email: string;
  phone: string;
}

export interface Order {
  id: string,
  name: String,
  address: string,
  weight: number,
  quantity: number,
  oderDate: string,
  oderStatus: string,
}

export interface OrderWithId {
  id: string,
  name: String,
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

export interface Location {
  name: string;
  location: string;
  count: number;
}

export interface EmployeeInfo {
  quanLy: string;
  maNhanVien: string;
  email: string;
  lienHe: string;
  soNhanVien: number;
}