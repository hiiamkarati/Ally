import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,          // 👈 if using standalone
  imports: [CommonModule],   // 👈 add this
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  message: string = '';

  sayHello() {
    this.message = 'Hello from Home Page component! 🚀';
  }
}
