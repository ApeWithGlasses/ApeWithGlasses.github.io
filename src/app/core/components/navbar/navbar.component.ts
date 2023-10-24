import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  toHome() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }

  toAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }

  toWorks() {
    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
  }

  toSkills() {
    document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
  }
}
