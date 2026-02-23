import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  darkMode = signal(false);

  constructor() {
    this.initializeThemeMode();
  }

  private initializeThemeMode() {
    const ThemeModeStored = localStorage.getItem('theme');
    const prefersDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const shouldBeDark: boolean = ThemeModeStored === 'dark' || (!ThemeModeStored && prefersDark);

    this.setThemeMode(shouldBeDark);
  }

  setThemeMode(isDark: boolean) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    this.darkMode.set(isDark);
  }

  toggleThemeMode() {
    this.setThemeMode(!this.darkMode());
  }
}
