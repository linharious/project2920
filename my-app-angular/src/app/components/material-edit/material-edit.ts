import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
// import { Material } from 'three';
import { Material } from '../../services/material';

import { Auth } from '../../services/auth';

@Component({
  selector: 'app-material-edit',
  imports: [FormsModule, CommonModule],
  templateUrl: './material-edit.html',
  styleUrl: './material-edit.scss',
})
export class MaterialEdit {
  errorMsg = '';
  submitting = false;
  materialId: string | null = null;

  form = {
    course_code: '',
    course_name: '',
    professor: '',
    semester: '',
    title: '',
    url: '',
    description: '',
  };

  constructor(
    private readonly materialService: Material,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly authService: Auth,
  ) {
    if (!this.authService.getToken()) {
      this.router.navigate(['/login']);
    }

    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigate(['/materials']);
      return;
    }

    this.materialId = id;

    this.materialService.getMaterialById(this.materialId).subscribe({
      next: (res) => {
        this.form = {
          course_code: res.course_code,
          course_name: res.course_name,
          professor: res.professor,
          semester: res.semester,
          title: res.title,
          url: res.url,
          description: res.description,
        };
      },
      error: () => {
        this.router.navigate(['/materials']);
      },
    });
  }

  submit() {
    this.submitting = true;

    this.materialService
      .update(
        this.materialId ?? '',
        this.form.course_code,
        this.form.course_name,
        this.form.professor,
        this.form.semester,
        this.form.title,
        this.form.url,
        this.form.description,
      )
      .subscribe({
        next: () => {
          this.router.navigate(['/materials']);
          this.submitting = false;
        },
        error: (err) => {
          this.errorMsg = err.error.error;
          this.submitting = false;
        },
      });
  }
}
