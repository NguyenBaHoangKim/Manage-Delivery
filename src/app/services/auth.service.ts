import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setServiceAddressId(serviceId: string): void {
    localStorage.setItem('serviceId', serviceId)
  }

  getServiceAddressId() : string {
    // let serviceId: string = localStorage.getItem('serviceId')
    let serviceId: string = 'KH01'
    return serviceId;
  }
  
  setToken(token: string): void {
    const tokenString: string = JSON.stringify(token);
    localStorage.setItem('token', tokenString);
  }

  getToken(): string | null {
    // let token = localStorage.getItem('token');
    let token: string = "eyJhbGciOiJIUzM4NCJ9.eyJ1c2VyIjp7ImlkIjoiM2QzMWYyZDctYTU3ZS0xMWVlLWE2NDUtM2JlZTFmM2M5M2JlIiwiY29kZWlkIjoiUUwwNiIsInNlcnZpY2VBZGRyZXNzaWQiOiJLSDAxIiwidXNlcm5hbWUiOiJLaWVuIiwiZW1haWwiOiJxbDA3QGdtYWlsLmNvbSIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAifSwic3ViIjoicWwwN0BnbWFpbC5jb20iLCJpYXQiOjE3MDM4MzUwMTcsImV4cCI6MTcwMzkyMTQxN30.7PTelesKvVd4knxxU2FIB4piE3bk1Na6MuBpLka7J8c5CjeLTJUwdHPTtvT9QKLk"

    if (token !== null) {
      console.log(token)
      // token = JSON.parse(token);
    }

    return token;
  }
}
