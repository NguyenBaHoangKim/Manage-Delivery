import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 

  }

  setServiceAddressId(serviceId: string): void {
    console.log('sơ vịt a đờ rẹt id'+serviceId)
    localStorage.setItem('serviceId', serviceId);
  }

  getServiceAddressId() : string{
    let serviceId: string | null= localStorage.getItem('serviceId')
    if (serviceId == null) {
      console.log('k luu duoc roi')
      serviceId = "hihi"
    }
    console.log(serviceId)
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
