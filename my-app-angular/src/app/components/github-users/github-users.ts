import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Github } from '../../services/github';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-github-users',
  imports: [FormsModule, CommonModule],
  templateUrl: './github-users.html',
  styleUrl: './github-users.scss',
})
export class GithubUsers {

  username = '';
  catFact = '';
  userData: any = null;
  errorMsg = '';

  constructor(private readonly githubService: Github) {
    this.githubService.getCatFact().subscribe({
      next: (data) => {
        console.log(data.data[0]);
        this.catFact = data.data[0];
      }
      });
  }


  searchUser() {
    this.githubService.getUser(this.username).subscribe({
      next: (data) => {
        console.log(data);
        this.userData = data;
        this.errorMsg = '';
      },

      error: () => {
        this.errorMsg = "user not found !!!!";
      }
    });

  }

}
