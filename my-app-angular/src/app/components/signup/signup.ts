import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {

  name = '';
  email='';
  password='';
  program='';
  errorMsg='';

  constructor(
    private readonly auth:Auth,
    private readonly router:Router
  ){}

  submit() {
    this.auth.signup(this.name, this.email, this.password, this.program).subscribe( {
      next: (res) => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.errorMsg=err.error.error;
      }
    });
  }

}
