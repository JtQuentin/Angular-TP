import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Transaction {
  id: string;
  amount: number;
  balance: number;
  label: string;
  description?: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class Transaction {
  private http = inject(HttpClient);

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>('/assets/transactions.json');
  }

  getTransactionDetail(id: string): Observable<Transaction> {
    return this.http.get<Transaction>(`/assets/${id}.json`);
  }
}
