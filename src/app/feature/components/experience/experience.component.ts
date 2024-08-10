import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const glowElement = document.getElementById('glow');
    if (glowElement) {
      const glowWidth = glowElement.offsetWidth;
      const glowHeight = glowElement.offsetHeight;
      glowElement.style.left = `${event.clientX - glowWidth / 2}px`;
      glowElement.style.top = `${event.clientY - glowHeight / 2}px`;
    }
  }
}
