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
  private isLoggedIn = false;

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  getToken(): string | null {
    // let token = localStorage.getItem('token');
    let token: string = "eyJhbGciOiJIUzM4NCJ9.eyJ1c2VyIjp7ImlkIjoiMmMxNmYyMjYtYTU5Ny0xMWVlLWE2NzYtNTkxNWUzOGNiNTFkIiwiY29kZWlkIjoiS0gwMSIsInNlcnZpY2VBZGRyZXNzaWQiOiJLSDAxIiwidXNlcm5hbWUiOiJLaWVuIiwiZW1haWwiOiJLaWVubiIsInBob25lX251bWJlciI6IjEyMzQ1Njc4OTAifSwic3ViIjoiS2llbm4iLCJpYXQiOjE3MDM4MzM2MDksImV4cCI6MTcwMzkyMDAwOX0.omk8KnVUOW41rYPr-bYg14y-nMI_Ac7WSM29tsAClkf4kve2QybbUpFh6xcaMqTM"  
    if (token !== null) {
      console.log(token)
      // token = JSON.parse(token);
    }

    return token;
  }
}
