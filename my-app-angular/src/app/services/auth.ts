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

  private readonly apiUrl = 'https://squid-app-a6n9k.ondigitalocean.app/';
  constructor(private readonly http: HttpClient) {}

  login(email: String, password: String ): Observable<AuthResponse>{
    return this.http.post<any>(`${this.apiUrl}auth/login`, {email, password});
  }

  signup(name: String, email: String, password: String, program: String): Observable<AuthResponse>{
    return this.http.post<any>(`${this.apiUrl}auth/signup`, {name, email, password, program});
  }

}
