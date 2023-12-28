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
    let token: string = "eyJhbGciOiJIUzM4NCJ9.eyJ1c2VyIjp7ImlkIjoiNzQ3Y2ZiZjAtYTU2Mi0xMWVlLTliZGUtMTljYWI2NjIzNzI3IiwiY29kZWlkIjoiUUwwNiIsInNlcnZpY2VBZGRyZXNzaWQiOiJLSDAyIiwidXNlcm5hbWUiOiJLaWVuIiwiZW1haWwiOiJxbDA3QGdtYWlsLmNvbSIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAifSwic3ViIjoicWwwN0BnbWFpbC5jb20iLCJpYXQiOjE3MDM3NTgyNzgsImV4cCI6MTcwMzg0NDY3OH0.88S1FRCijqRlaARuUr007SgtxKfg29mwKPWMjwgs_7E4g0w8gfB-IE9QluaZUKXq"

    if (token !== null) {
      console.log(token)
      // token = JSON.parse(token);
    }

    return token;
  }
}
