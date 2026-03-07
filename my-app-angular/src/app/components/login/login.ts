import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email = "";
  password = "";
  errorMsg = "";

  constructor(
    private readonly auth: Auth,
    private readonly router: Router
  ) {}

  submit() {
    this.auth.login(this.email, this.password).subscribe({
      next: (res) => {
        console.log(res);
        this.errorMsg = '';

        // if successful login --> go inside the app
        this.router.navigate(["/material"]);
      },
      error: (err) => {
        this.errorMsg = err.error.error;
        // console.log(this.errorMsg);
      }
    })
  }

}
