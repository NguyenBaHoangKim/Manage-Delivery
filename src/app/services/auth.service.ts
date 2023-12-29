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
    let token: string = "eyJhbGciOiJIUzM4NCJ9.eyJ1c2VyIjp7ImlkIjoiMTk4ZTFjZTUtYTU3My0xMWVlLWFhZmMtODU0YjBhNGEwMGM1IiwiY29kZWlkIjoiUUwwMSIsInNlcnZpY2VBZGRyZXNzaWQiOiJLSDAxIiwidXNlcm5hbWUiOiJLaW0iLCJlbWFpbCI6ImtpbUBtYWdpY3Bvc3QiLCJwaG9uZV9udW1iZXIiOiIxMjM0NTY3ODkwIn0sInN1YiI6ImtpbUBtYWdpY3Bvc3QiLCJpYXQiOjE3MDM4NDExNTAsImV4cCI6MTcwMzkyNzU1MH0.0dbXWHLMYXlM7HwPSFdf_f3w31jr0CIVLLY_wn6W-w3oV0Yuj4wxdPTVhWDm2G1B"

    if (token !== null) {
      console.log(token)
      // token = JSON.parse(token);
    }

    return token;
  }
}
