import { Component, signal } from '@angular/core';
import { version } from '../../../../package.json';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly title = signal('Angular Starter');
  readonly version = signal(version);

  readonly techStack = signal([
    { name: 'Angular', icon: 'angular' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Tailwind CSS', icon: 'tailwind' },
    { name: 'Vite', icon: 'vite' },
    { name: 'ESLint', icon: 'eslint' },
  ]);

  readonly year = signal(new Date().getFullYear());
}
