import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [DatePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  now: Date = new Date();

  ngOnInit() {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }
}
