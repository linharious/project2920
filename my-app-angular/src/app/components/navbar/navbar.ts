import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Auth, User } from '../../services/auth';
import { filter, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit, OnDestroy {
  currentUser: User | null = null;
  isLoggedIn = false;
  private sub?: Subscription;

  constructor(
    private readonly authService: Auth,
    private readonly router: Router,
  ) {
    this.currentUser = this.authService.getCurrentUser();
  }

  //
  ngOnInit() {
    this.updateAuthState();

    // create subscription for the navigation event. nav from 1 page to another will call this function
    this.sub = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.updateAuthState());
  }

  logout() {
    this.authService.clearToken();
    this.router.navigate(['/login']);
  }

  updateAuthState() {
    this.currentUser = this.authService.getCurrentUser();
    this.isLoggedIn = !!this.authService.getToken();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
