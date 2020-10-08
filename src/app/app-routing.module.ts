import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitsComponent} from './produits/produits.component';
import {NouveauProduitComponent} from './nouveau-produit/nouveau-produit.component';
import {EditerProduitComponent} from './editer-produit/editer-produit.component';

const routes: Routes = [
  {path: "produits",
   component:ProduitsComponent},
  {path: "ajouteProduit",
    component:NouveauProduitComponent},
  {path: "",
    redirectTo:"/produits",
    pathMatch:"full"},
  {path: "editer/:reference",
    component:EditerProduitComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
