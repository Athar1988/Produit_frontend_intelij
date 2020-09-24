import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CataloguesService} from '../services/catalogues.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})

export class ProduitsComponent implements OnInit {
  //une variable où on va stocker les donner envoyé
  public produits:any;
  constructor(private catService:CataloguesService) { }

  ngOnInit(): void {
  }

  onGetProducts() {
this.catService.getProduit()
  .subscribe(data=>{
    this.produits=data;
  },
    err=>{
    console.log(err);
    })
  }
}
