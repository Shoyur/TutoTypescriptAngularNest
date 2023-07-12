import { Component } from '@angular/core';

import { productsSource } from '../products';
// on écrit products même si c'est products.ts
// donc quand on importe un fichier ts, on oublie l'extension .ts

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = productsSource;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  // cette fonction aussi doit être dans le code html
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/