import { Component, OnInit } from '@angular/core';
import {Produit} from '../model/produit.model';
import {CataloguesService} from '../services/catalogues.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProduitsComponent} from '../produits/produits.component';

@Component({
  selector: 'app-editer-produit',
  templateUrl: './editer-produit.component.html',
  styleUrls: ['./editer-produit.component.css']
})
export class EditerProduitComponent implements OnInit {
  public currentProduit: Produit;
  public url:string;
  constructor(private router:Router, private activateRoute:ActivatedRoute, private catService:CataloguesService) { }

  ngOnInit(): void {
    this.url=atob(this.activateRoute.snapshot.params.reference);
   // console.log(this.activateRoute.snapshot.params.reference)
    this.catService.EditerProduit(this.url)
      .subscribe(data=>{
          this.currentProduit=data;
        },
        err=>{
          console.log(err);
        })
  }



  onGetEditer(value: any) {
    this.catService.UpdateProduit(this.url,value)
      .subscribe(data=>{
          alert("Mise à jour effectuée avec succès");
          this.router.navigateByUrl("/produits");
        },
        err=>{
          console.log(err);
        })
  }
}
