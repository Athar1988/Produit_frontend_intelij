///<reference path="../../../node_modules/@angular/common/http/http.d.ts"/>
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Produit} from '../model/produit.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class CataloguesService {
  public host:string="http://localhost:8087";

  constructor(private HttpClient:HttpClient) { }

  public getProduit(page:number,size:number){
    return this.HttpClient.get(this.host+"/produits?page="+page+"&size="+size);
  }

  public getProductByKeyWord(mc:string,page:number,size:number){
    return this.HttpClient.get(this.host+"/produits/search/chercherPage?mc="+mc+"&page="+page+"&size="+size);
  }

  public getSuppression(url){
    return this.HttpClient.delete(url);
  }


    public AjouterProduit(url,data):Observable<Produit>{
    return this.HttpClient.post<Produit>(url,data);
  }

  public EditerProduit(url):Observable<Produit>{
    return this.HttpClient.get<Produit>(url);
  }

  public UpdateProduit(url,data){
    return this.HttpClient.put(url,data);
  }
}
