import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CataloguesService {

  constructor(private HttpClient:HttpClient) { }

  public getProduit(){
    return this.HttpClient.get("http://localhost:8087/produits");
  }
}
