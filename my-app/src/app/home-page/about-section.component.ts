import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.html',
  styleUrls: ['./about-section.scss']
})
export class AboutSectionComponent {
  // Component logic here
  // Smooth scroll to a section by id (e.g. '#projects')
  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const el = document.querySelector(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  // Open external link in a new tab/window
  openExternal(url: string) {
    window.open(url, '_blank', 'noopener');
  }
}