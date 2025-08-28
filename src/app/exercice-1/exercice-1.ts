import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercice-1',
  imports: [FormsModule],
  templateUrl: './exercice-1.html',
  styleUrl: './exercice-1.css',
})
export class Exercice1 {
  userName: string = '';
  selectedFont: string = 'Arial';
  fontSize: number = 36;
  alignment: string = 'left';
}
