import { LoginComponent } from "../components/login/login.component";

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
  oderId: string,
  status: string,
  date: string,
}

export interface OrderReq {
  namefrom : string,
  phonefrom : string,
  name : string,
  address : string,
  weight : number,
  quantity : number,
  nameto : string,
  phoneto : string,
  description : string,
}

export interface ServiceAddress {
  id: string,
  name: string;
  address: string;
}

export interface OrderReqUpdate {
  orderId: string,
  serviceAddressId: string,
}

export interface EmployeeInfo {
  quanLy: string;
  maNhanVien: string;
  email: string;
  lienHe: string;
  soNhanVien: number;
}

export interface UserBoss {
  codeid: number;
  username: string;
  email: string;
  phone_number: string;
}


export interface BossRes {
  serviceAddress: ServiceAddress,
  user: UserBoss,
  countEmployee : string,
  countOrder: string
}

export interface Login{
  email: string;
  password: string;
}

export interface Register{
  codeid:string,
  username:string,
  email:string
  password:string
  rePassword:string
  phone_number:string
}

export interface OrderStatus{
  status: string;
  date: string;
}