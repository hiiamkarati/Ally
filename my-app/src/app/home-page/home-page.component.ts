import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  navLinks = [
    { name: 'Home', url: '/' },
    { name: 'About me', url: '/about' },
    { name: 'Skills', url: '/skills' },
    { name: 'Experience', url: '/experience' },
    { name: 'Projects', url: '/projects' }
  ];

  contactUrl = '/contact';

  ngOnInit() {
    // No theme toggle - keep default styles
  }

  ngAfterViewInit() {
    // Custom cursor implementation
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    // Check if cursor is added to DOM
    if (!document.querySelector('.custom-cursor')) {
      console.error('Custom cursor element not added to DOM. Check JavaScript execution.');
    }

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

  // Add hover effect for interactive elements
  const hoverElements = document.querySelectorAll('a, .contact-btn, .profile-image, .logo, img, .nav-item, .cta-btn');
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
      });
    });
  }
}