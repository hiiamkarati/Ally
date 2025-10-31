import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  // Hover state for interactive timeline
  hoverIndex: number | null = null;
  // controls car position along the timeline (CSS top value)
  carTop: string = '20%';

  setHover(index: number) {
    this.hoverIndex = index;
    // map index to approximate top positions on the timeline
    if (index === 1) this.carTop = '22%';
    else if (index === 2) this.carTop = '78%';
    else this.carTop = '50%';
  }

  clearHover() {
    this.hoverIndex = null;
    // leave the car at the last known position (do not reset)
  }

  // Contact form data
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', this.formData);
    // Reset form after submission
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}