import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

  @Input() product!: Product;

  // pour que le composant ProductAlertsComponent puisse recevoir des données
  // du parent, il faut importer le module Input de @angular/core
  // ainsi le decorator @Input indique l'info qui arrive du composant parent
  
  // ici, (product!) le bang! indique que cette valeur ne peut pas être null ou undefined

  // Explication :
  // parce-que j'ai mis le <app-product-alerts [product]="product"></app-product-alerts>
  // dans le product-list.component.html qui lui a une boucle de "product"
  // ce composant ci, utilise avec le @Input ce fameux "product" et exécute le
  // product-alerts.component.html avec
  //    <p *ngIf="product && product.price > 700">
  //      <button type="button">Notify Me</button>
  //    </p>
  // donc ce bouton Notify Me apparait si > 700 dans product-list.component.html

  // évidemment, le parent doit avoir l'objet du @Input

  @Output() notify = new EventEmitter();

  // pour que le composant ProductAlertsComponent puisse envoyer des données
  // au parent, il faut importer le module Output et EventEmitter de @angular/core
  // ainsi le decorator @Output indique l'info qui arrive du composant parent

  // Celà va émettre un événement lorsque la valeur notify va changer
  // il faut ensuite ajouter une liaison d'événement (event binding)
  // comme par exemple <button type="button" (click)="notify.emit()">Notify Me</button>
  // dans ce component ci (lui-même: product-alerts)
  // donc on s'affecte nous-même avec un listener d'événement disons
  // car c'est justement nous qui envoyons cet événement au parent

  // donc ensuite on mets un onNotify() dans product-list.component.ts
  // car c'est directmeent du code à exécuter
  

}
