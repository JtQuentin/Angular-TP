import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercice-2',
  imports: [FormsModule, DatePipe],
  templateUrl: './exercice-2.html',
  styleUrl: './exercice-2.css',
})
export class Exercice2 {
  n1: number = 0;
  n2: number = 0;
  operation: 'addition' | 'subtraction' | 'division' | 'multiplication' = 'addition';
  result: number = 0;
  history: {
    time: number;
    operation: 'addition' | 'subtraction' | 'division' | 'multiplication';
    result: number;
  }[] = [];

  onCalcul() {
    switch (this.operation) {
      case 'addition':
        this.result = this.n1 + this.n2;
        break;
      case 'subtraction':
        this.result = this.n1 - this.n2;
        break;
      case 'division':
        this.result = this.n1 / this.n2;
        break;
      case 'multiplication':
        this.result = this.n1 * this.n2;
        break;
    }
    this.history.push({
      time: Date.now(),
      operation: this.operation,
      result: this.result,
    });
  }

  deleteHistoryItem(time: number) {
    this.history = this.history.filter((item) => item.time !== time);
  }
}
