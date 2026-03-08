import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface AuthResponse {
  access_token: string;
  user: User;
}

export interface User {
  email: string;
    id: string;
    name: string;
    program: string;
}

@Injectable({
  providedIn: 'root',
})

export class Auth {

  private readonly apiUrl = 'https://squid-app-a6n9k.ondigitalocean.app';
  constructor(private readonly http: HttpClient) {}

  login(email: string, password: string ): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, {email, password});
  }

  signup(name: string, email: string, password: string, program: string): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/signup`, {name, email, password, program});
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getAuthHeaders() {
    const token = this.getToken();
    return {Authorization: `Bearer ${token}`}
  }

}
