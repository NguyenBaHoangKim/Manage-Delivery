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
<<<<<<< HEAD
    let token = localStorage.getItem('token');
    // let token: string = "eyJhbGciOiJIUzM4NCJ9.eyJ1c2VyIjp7ImlkIjoiM2QzMWYyZDctYTU3ZS0xMWVlLWE2NDUtM2JlZTFmM2M5M2JlIiwiY29kZWlkIjoiUUwwNiIsInNlcnZpY2VBZGRyZXNzaWQiOiJLSDAxIiwidXNlcm5hbWUiOiJLaWVuIiwiZW1haWwiOiJxbDA3QGdtYWlsLmNvbSIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAifSwic3ViIjoicWwwN0BnbWFpbC5jb20iLCJpYXQiOjE3MDM4MzUwMTcsImV4cCI6MTcwMzkyMTQxN30.7PTelesKvVd4knxxU2FIB4piE3bk1Na6MuBpLka7J8c5CjeLTJUwdHPTtvT9QKLk"
=======
    // let token = localStorage.getItem('token');
    let token: string = "eyJhbGciOiJIUzM4NCJ9.eyJ1c2VyIjp7ImlkIjoiNWVkNzU3Y2UtYTY0MS0xMWVlLWIzY2YtNmJkNzkzNWQ0YzI4IiwiY29kZWlkIjoiS0gwMiIsInNlcnZpY2VBZGRyZXNzaWQiOiJLSDAxIiwidXNlcm5hbWUiOiJLaWVuIiwiZW1haWwiOiJLaWVuMDIiLCJwaG9uZV9udW1iZXIiOiIxMjM0NTY3ODkwIn0sInN1YiI6IktpZW4wMiIsImlhdCI6MTcwMzg1MTAzNywiZXhwIjoxNzAzOTM3NDM3fQ.GOfnkhkGQ7OMxSpuhWdh5lgJsohs0B4PSMqDUaett56lxEXdR18DVF6EwVzYx4RA"

>>>>>>> newfixkien

    if (token !== null) {
      console.log(token)
      // token = JSON.parse(token);
    }

    return token;
  }

  clean(): void {
    localStorage.clear()
    localStorage.removeItem('token')
  }
}
