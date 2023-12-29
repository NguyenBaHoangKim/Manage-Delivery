import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 

  }

  setServiceAddressId(serviceId: string): void {
    localStorage.setItem('serviceId', serviceId)
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
    let tokenString = localStorage.getItem('token');

if (tokenString !== null && tokenString !== undefined) {
  let token = JSON.parse(tokenString);
  // Bây giờ bạn có thể sử dụng biến 'token' mà không gặp lỗi
} else {
  console.error('Giá trị token từ localStorage là null hoặc undefined.');
}
    // let token: string = "eyJhbGciOiJIUzM4NCJ9.eyJ1c2VyIjp7ImlkIjoiM2QzMWYyZDctYTU3ZS0xMWVlLWE2NDUtM2JlZTFmM2M5M2JlIiwiY29kZWlkIjoiUUwwNiIsInNlcnZpY2VBZGRyZXNzaWQiOiJLSDAxIiwidXNlcm5hbWUiOiJLaWVuIiwiZW1haWwiOiJxbDA3QGdtYWlsLmNvbSIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAifSwic3ViIjoicWwwN0BnbWFpbC5jb20iLCJpYXQiOjE3MDM4MzUwMTcsImV4cCI6MTcwMzkyMTQxN30.7PTelesKvVd4knxxU2FIB4piE3bk1Na6MuBpLka7J8c5CjeLTJUwdHPTtvT9QKLk"


    if (tokenString !== null) {
      console.log(tokenString)
      // token = JSON.parse(token);
    }

    return tokenString;
  }

  clean(): void {
    localStorage.clear()
    localStorage.removeItem('token')
  }
}
