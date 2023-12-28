import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  // setToken(token: string): void {
  //   const tokenString: string = JSON.stringify(token);
  //   localStorage.setItem('token', tokenString);
  // }

  getToken(): string | null {
    // let token = localStorage.getItem('token');
    let token: string = "eyJhbGciOiJIUzM4NCJ9.eyJ1c2VyIjp7ImlkIjoiNDJjNmZiOWUtYTNjNy0xMWVlLTlhNmYtMTUyZTlhM2VkYjA1IiwiY29kZWlkIjoiUUwwMyIsInVzZXJuYW1lIjoiQ2ltIiwiZW1haWwiOiJxbDAzQGdtYWlsLmNvbSIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAifSwic3ViIjoicWwwM0BnbWFpbC5jb20iLCJpYXQiOjE3MDM1ODIwNTcsImV4cCI6MTcwMzY2ODQ1N30.m_vUt_Ow2mB-AS3ymghWNIpVGRcuP8hA9nussvFZwvDAkCdCwvaWCaQXTZsoWqEk"

    if (token !== null) {
      console.log(token)
      // token = JSON.parse(token);
    }

    return token;
  }
}
