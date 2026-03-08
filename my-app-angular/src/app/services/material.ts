import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from './auth';

export interface Material {
  "course_code": string;
  "course_name": string;
  "created_at": string;
  "description": string;
  "id": string;
  "posted_by": string;
  "posted_by_user": PostedByUser;
  "professor": string;
  "semester": string;
  "title": string;
  "url": string;
}

export interface PostedByUser {
  "email": string;
  "id": string;
  "name": string;
}

@Injectable({
  providedIn: 'root',
})

export class Material {
  private readonly apiUrl = 'https://squid-app-a6n9k.ondigitalocean.app';
  constructor(private readonly http: HttpClient,
    private readonly authService: Auth
  ) {}

  listAll(): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.apiUrl}/materials`, {headers: new HttpHeaders(this.authService.getAuthHeaders())});
  }

}
