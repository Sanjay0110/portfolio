import { Injectable } from '@angular/core';
import Typed from 'typed.js';

@Injectable({
  providedIn: 'root'
})
export class TypeTextService {
  private typed: Typed | undefined;

  constructor() { }

  startTyping(elementId: string, text: string,speed:number) {
    this.typed = new Typed(`#${elementId}`, {
      strings: [text],
      typeSpeed:speed, // Adjust the typing speed as needed
      showCursor: false,
    });
  }

  stopTyping() {
    if (this.typed) {
      this.typed.destroy();
    }
  }
}
