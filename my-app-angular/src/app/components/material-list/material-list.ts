import { Component } from '@angular/core';
import { Material } from '../../services/material';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-material-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './material-list.html',
  styleUrl: './material-list.scss',
})
export class MaterialList {
  material: Material[] = [];

  constructor(
    private readonly materialService: Material,
    private readonly authService: Auth,
    private readonly router: Router,
  ) {
    if (!this.authService.getToken()) {
      this.router.navigate(['/login']);
    }
    this.loadMaterials();
    // this.materialService.listAll().subscribe({
    //   next: (res) => {
    //     // console.log(res)
    //     this.material = res;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //     this.material;
    //   },

    //   // most of the case error is when the token is expired
    // });
  }

  loadMaterials() {
    this.materialService.listAll().subscribe({
      next: (res) => {
        this.material = res;
      },
      error: () => {
        this.authService.clearToken();
        this.router.navigate(['/login']);
      },
    });
  }

  deleteMaterial(id: string) {
    if (!confirm('Do you want to delete this material?')) {
      return;
    }
    this.materialService.delete(id).subscribe({
      next: () => {
        this.loadMaterials();
      },
      error: (err) => {
        alert(err.error.error);
      },
    });
  }
}
