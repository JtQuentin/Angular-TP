import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { Transaction } from '../../services/transaction';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transaction-detail',
  imports: [Header, DatePipe],
  templateUrl: './transaction-detail.html',
  styleUrl: './transaction-detail.css',
})
export class TransactionDetail implements OnInit {
  transaction?: Transaction;
  private route = inject(ActivatedRoute);
  private transactionService = inject(Transaction);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.transactionService.getTransactionDetail(id).subscribe((data) => {
        this.transaction = data;
      });
    }
  }
}
