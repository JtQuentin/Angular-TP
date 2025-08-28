import { Routes } from '@angular/router';
import { TransactionDetail } from './exercice-3/transaction-detail/transaction-detail';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'transaction/:id',
    component: TransactionDetail,
  },
];
