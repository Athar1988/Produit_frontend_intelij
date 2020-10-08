import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CataloguesService} from '../services/catalogues.service';
import {newArray} from '@angular/compiler/src/util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})

export class ProduitsComponent implements OnInit {
  //une variable où on va stocker les donner envoyé
  public produits:any;
  public size:number=5;
  public currentpage:number=0;
  public totalpages:number;
  public pages:Array<number>;
  public keyword:string;

  constructor(private catService:CataloguesService , private router:Router) { }

  ngOnInit(): void {
  }

  onGetProducts() {
this.catService.getProduit(this.currentpage,this.size)
  .subscribe(data=>{
      this.totalpages=data["page"].totalPages;
      this.pages=new Array<number>(this.totalpages);
      this.produits=data;
  },
    err=>{
    console.log(err);
    })
  }

  onPageProduct(i) {
    this.currentpage=i;
    this.ChercherProduct();
  }


    onGetChercher(form: any) {
      this.currentpage=0;
      this.keyword=form.keyword;
      this.ChercherProduct();
      }

  ChercherProduct() {
    this.catService.getProductByKeyWord(this.keyword,this.currentpage,this.size)
      .subscribe(data=>{
          this.totalpages=data["page"].totalPages;
          this.pages=new Array<number>(this.totalpages);
          this.produits=data;
        },
        err=>{
          console.log(err);
        })
  }

  onSupprime(p) {
    let conf=confirm("Vous-etes sur de supprimer?");
   if(conf) //console.log(p);
    {
      this.catService.getSuppression("http://localhost:8087/produits/"+p)
        .subscribe(data=>{
           this.onGetProducts();
          },
          err=>{
            console.log(err);
          })
    }

  }

  onEditer(p)
  { console.log(p);
    let url=p._links.self.href;
    this.router.navigateByUrl("/editer/"+btoa(url));
  }
}
