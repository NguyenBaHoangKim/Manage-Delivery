import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 

  }

  setCodeId(codeId: string): void {
    console.log('cốt id'+ codeId)
    localStorage.setItem('codeId', codeId);
  }

  getCodeId() : string{
    let codeId: string | null= localStorage.getItem('codeId')
    if (codeId == null) {
      console.log('k luu duoc roi')
      codeId = "hihi"
    }
    console.log("aaaaaaa"+codeId)
    return codeId;
  }

  setServiceAddressId(serviceId: string): void {
    localStorage.setItem('serviceId', serviceId);
  }

  getServiceAddressId() : string{
    let serviceId: string | null= localStorage.getItem('serviceId')
    if (serviceId == null) {
      console.log('k luu duoc roi')
      serviceId = "hihi"
    }
    // let serviceId: string = 'KH01'
    return serviceId;
  }
  
  setToken(token: string) {
    const tokenString: string = JSON.stringify(token);
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    let token = localStorage.getItem('token');
    return token;
  }

  clean(): void {
    localStorage.clear()
    localStorage.removeItem('token')
  }
}
