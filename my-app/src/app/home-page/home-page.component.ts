import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AboutSectionComponent } from './about-section.component';

interface AppItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: 'installed' | 'update available' | 'updated';
  category: string;
  gradient?: string;
  isFeatured?: boolean;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  isActive?: boolean;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, AboutSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  navLinks = [
    { name: 'Home', url: '#home' },
    { name: 'About me', url: '#about' },
    { name: 'Skills', url: '#skills' },
    { name: 'Experience', url: '#experience' },
    { name: 'Projects', url: '#projects' }
  ];

  contactUrl = '/contact';

  scrollToSection(event: Event, sectionId: string) {
    if (this.isBrowser) {
      event.preventDefault();
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  ngOnInit() {
    // No theme toggle - keep default styles
  }

  ngAfterViewInit() {
    if (!this.isBrowser) return;

    // Custom cursor implementation
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
      requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      });
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