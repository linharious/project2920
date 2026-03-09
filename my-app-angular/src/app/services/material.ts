import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from './auth';

export interface Material {
  course_code: string;
  course_name: string;
  created_at: string;
  description: string;
  id: string;
  posted_by: string;
  posted_by_user: PostedByUser;
  professor: string;
  semester: string;
  title: string;
  url: string;
}

export interface PostedByUser {
  email: string;
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class Material {
  private readonly apiUrl = 'https://squid-app-a6n9k.ondigitalocean.app';
  constructor(
    private readonly http: HttpClient,
    private readonly authService: Auth,
  ) {}

  listAll(): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.apiUrl}/materials`, {
      headers: new HttpHeaders(this.authService.getAuthHeaders()),
    });
  }

  create(
    course_code: string,
    course_name: string,
    professor: string,
    semester: string,
    title: string,
    url: string,
    description: string,
  ): Observable<Material> {
    return this.http.post<Material>(
      `${this.apiUrl}/materials`,
      { course_code, course_name, professor, semester, title, url, description },
      {
        headers: new HttpHeaders(this.authService.getAuthHeaders()),
      },
    );
  }

  delete(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/materials/${id}`, {
      headers: new HttpHeaders(this.authService.getAuthHeaders()),
    });
  }

  getMaterialById(id: string): Observable<Material> {
    return this.http.get<Material>(`${this.apiUrl}/materials/${id}`, {
      headers: new HttpHeaders(this.authService.getAuthHeaders()),
    });
  }

  update(
    id: string,
    course_code: string,
    course_name: string,
    professor: string,
    semester: string,
    title: string,
    url: string,
    description: string,
  ): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/materials/${id}`,
      { course_code, course_name, professor, semester, title, url, description },
      { headers: new HttpHeaders(this.authService.getAuthHeaders()) },
    );
  }
}

// "course_code":"420-CT7-AS",
//     "course_name":"OOP POO OOP",
//     "professor":"renan",
//     "semester":"2026.1",
//     "title":"finale examen",
//     "url":"https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf$0",
//     "description":"PDF final solution"
