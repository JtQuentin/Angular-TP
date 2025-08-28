import { Component } from '@angular/core';
import { Exercice1 } from '../exercice-1/exercice-1';
import { Exercice2 } from '../exercice-2/exercice-2';
import { Exercice3 } from '../exercice-3/exercice-3';

@Component({
  selector: 'app-home',
  imports: [Exercice1, Exercice2, Exercice3],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
