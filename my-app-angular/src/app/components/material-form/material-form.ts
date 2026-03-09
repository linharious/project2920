import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import { Material } from 'three';
import { Material } from '../../services/material';

@Component({
  selector: 'app-material-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './material-form.html',
  styleUrl: './material-form.scss',
})
export class MaterialForm {
  errorMsg = '';

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
  ) {}
  submit() {
    this.materialService
      .create(
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
          this.router.navigate(['/material']);
        },
        error: (err) => {
          console.log(err);
          this.errorMsg = err.error.error;
        },
      });
  }
}
