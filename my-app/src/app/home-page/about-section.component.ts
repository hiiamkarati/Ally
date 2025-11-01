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
    // Minimal client-side send using the user's mail client (mailto).
    // This opens the user's default mail app with the form data prefilled.
    // Pros: no backend needed. Cons: depends on user's mail client and won't work for users who rely on webmail without a handler.
    const recipient = 'prakriti.ce@gmail.com';
    const subject = `Contact from ${this.formData.name || 'Website Visitor'}`;
    const body = `Name: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMessage:\n${this.formData.message}`;
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Open mail client
    window.location.href = mailto;

    // Optionally clear the form after a short delay so the mail client can open
    setTimeout(() => {
      this.formData = { name: '', email: '', message: '' };
    }, 500);
  }
}