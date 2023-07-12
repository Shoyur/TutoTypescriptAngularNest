import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();

  // .group() = méthode pour créer plein de propriétés
  // à l'objet FormBuilder
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  // *** J'avais oublié "private" et donc
  // l'instanciation cartService ne se faisait même pas
  // et ça buggait ben raide
  constructor(private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router) {}
  
    onSubmit(): void {
      this.items = this.cartService.clearCart();
      console.warn('Your order has been submitted', this.checkoutForm.value);
      // besoin de reset si on reste sur la même page après avoir pesé submit
      // sinon le fait de reload la page, remet les champs à vide
      this.checkoutForm.reset();
      // on import + constructor + ce chemin
      // this.router.navigateByUrl('/')
      // ou par son nom
      this.router.navigate(['']);
    }


}
