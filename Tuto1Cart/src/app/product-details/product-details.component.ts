import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productsSource } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  ngOnInit() {
    // on va chercher le id dans le url
    // paramMap détient tous le data relié à ce changement de chemin
    // dans le Router, on a configuré que le id est productId :
    // { path: 'products/:productId', component: ProductDetailsComponent },
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    // .find() fait une boucle dans productsSource
    // à chaque product, vérifie si la propriété id est celle de la route
    // et assigne cette valeur à this.product
    this.product = productsSource.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Le "'+product.name+'" a été ajouté au panier.');
  }

}
