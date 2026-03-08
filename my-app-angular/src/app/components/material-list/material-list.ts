import { Component } from '@angular/core';
import { Material } from '../../services/material';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-material-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './material-list.html',
  styleUrl: './material-list.scss',
})
export class MaterialList {

  material: Material[] = [];

  constructor(private readonly materialService: Material) {
    this.materialService.listAll().subscribe({
      next: (res) => {
        // console.log(res)
        this.material = res;
      },
      error: (err) => {
        console.log(err);
        this.material
      }

        // most of the case error is when the token is expired
    })
  }
}
