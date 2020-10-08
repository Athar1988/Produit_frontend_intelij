import { Component, OnInit } from '@angular/core';
import {CataloguesService} from '../services/catalogues.service';
import {Router} from '@angular/router';
import {Produit} from '../model/produit.model';

@Component({
  selector: 'app-nouveau-produit',
  templateUrl: './nouveau-produit.component.html',
  styleUrls: ['./nouveau-produit.component.css']
})
export class NouveauProduitComponent implements OnInit {
 public designation:string;
  public currentProduit: Produit;
  public mode: number=1;
 // private currentProduit: Object;
  constructor(private catService:CataloguesService , private router:Router) { }

  ngOnInit(): void {}



  onGetAjouter(data: any) {
    this.catService.AjouterProduit(this.catService.host+"/produits",data)
      .subscribe(res=>{
          //this.router.navigateByUrl("/produits")
        this.currentProduit=res;
        this.mode=2;
        },
        err=>{
          console.log(err);
        })
   // console.log(value);
  }

  onNewProduit() {
    this.mode=1;
  }
}
