import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts!: Observable<{ type: string, price: number }[]>;
  // encore un array d'objets avec .prop type & price
  // mais Observable donc ?
  // pourquoi si rien s'update automatiquement ???

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }

}
