import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  getToken() {
    return window.localStorage.getItem('token');
  }

  setToken(token: string) {
    return window.localStorage.setItem('token', token);
  }

  removeToken() {
    return window.localStorage.removeItem('token');
  }
}
