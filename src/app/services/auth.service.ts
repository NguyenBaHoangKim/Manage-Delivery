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

  getServiceAddressId() : string {
    // let serviceId: string = localStorage.getItem('serviceId')
    let serviceId: string = 'KH02'
    return serviceId;
  }
  
  setToken(token: string): void {
    const tokenString: string = JSON.stringify(token);
    localStorage.setItem('token', tokenString);
  }

  getToken(): string | null {
    let token = localStorage.getItem('token');
    // let token: string = "eyJhbGciOiJIUzM4NCJ9.eyJ1c2VyIjp7ImlkIjoiNWVkNzU3Y2UtYTY0MS0xMWVlLWIzY2YtNmJkNzkzNWQ0YzI4IiwiY29kZWlkIjoiS0gwMiIsInNlcnZpY2VBZGRyZXNzaWQiOiJLSDAxIiwidXNlcm5hbWUiOiJLaWVuIiwiZW1haWwiOiJLaWVuMDIiLCJwaG9uZV9udW1iZXIiOiIxMjM0NTY3ODkwIn0sInN1YiI6IktpZW4wMiIsImlhdCI6MTcwMzg1MTAzNywiZXhwIjoxNzAzOTM3NDM3fQ.GOfnkhkGQ7OMxSpuhWdh5lgJsohs0B4PSMqDUaett56lxEXdR18DVF6EwVzYx4RA"


    if (token !== null) {
      console.log(token)
      // token = JSON.parse(token);
    }

    return token;
  }
}
