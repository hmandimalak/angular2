import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {
produits : string[];
constructor(){
  this.produits=["pc asus "," imprimante epson","tablette samsung"];
}
}


