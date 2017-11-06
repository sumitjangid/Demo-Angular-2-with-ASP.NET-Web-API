import { ProductRecoModel } from './model/product-reco';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductrecoService {

  url = 'http://localhost:28820/';

  constructor(private http: Http) {  }

  getProductRecommendation(): Observable<any> {
    return this.http.get(this.url + 'api/productReco');
  }
}
