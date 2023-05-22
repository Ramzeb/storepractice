import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private urlApi = 'https://fakestoreapi.com/products';
  private urlElectronics =
    'https://fakestoreapi.com/products/category/electronics';
  private urlClothingMen =
    "https://fakestoreapi.com/products/category/men's%20clothing";
  private urlClothingWoment =
    "https://fakestoreapi.com/products/category/women's%20clothing";
  private urlJewelery = 'https://fakestoreapi.com/products/category/jewelery';

  constructor(private http: HttpClient) {}

  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

  public getElectronics(): Observable<any> {
    return this.http.get<any>(this.urlElectronics);
  }

  public getClothingMen(): Observable<any> {
    return this.http.get<any>(this.urlClothingMen);
  }

  public getClothingWomen(): Observable<any> {
    return this.http.get<any>(this.urlClothingWoment);
  }

  public getJewelery(): Observable<any> {
    return this.http.get<any>(this.urlJewelery);
  }
}
