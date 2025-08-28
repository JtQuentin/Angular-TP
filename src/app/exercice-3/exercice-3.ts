import { Component, inject, OnInit } from '@angular/core';
import { Header } from './header/header';
import { Transaction } from '../services/transaction';
import { Router } from '@angular/router';
import { DatePipe, Location } from '@angular/common';

@Component({
  selector: 'app-exercice-3',
  imports: [Header, DatePipe],
  templateUrl: './exercice-3.html',
  styleUrl: './exercice-3.css',
})
export class Exercice3 implements OnInit {
  transactions: Transaction[] = [];
  sortKey: keyof Transaction | null = null;
  reverse = false;
  private transactionService = inject(Transaction);
  private router = inject(Router);
  private location = inject(Location);

  ngOnInit() {
    this.transactionService.getTransactions().subscribe((data) => {
      this.transactions = data;
    });
  }

  sort(key: keyof Transaction) {
    if (this.sortKey === key) {
      this.reverse = !this.reverse;
    } else {
      this.sortKey = key;
      this.reverse = false;
    }
    this.transactions.sort((a, b) => {
      const valA = a[key];
      const valB = b[key];
      if (valA! < valB!) return this.reverse ? 1 : -1;
      if (valA! > valB!) return this.reverse ? -1 : 1;
      return 0;
    });
  }

  showDetail(id: string) {
    const urlTree = this.router.createUrlTree(['/transaction', id]);
    const url = this.location.prepareExternalUrl(this.router.serializeUrl(urlTree));
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
