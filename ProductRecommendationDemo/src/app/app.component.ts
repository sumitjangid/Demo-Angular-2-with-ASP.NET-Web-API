import { ProductrecoService } from './productreco.service';
import { ProductRecoModel } from './model/product-reco';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Product Recommendation Demo';
  model: ProductRecoModel;

  productrecos: ProductRecoModel[];

  constructor(private productRecoService: ProductrecoService) {}

  ngOnInit() {

  }

  onProductRecoClick() {
    this.productRecoService.getProductRecommendation()
    .subscribe((result) => {
      this.productrecos = result.json();
    });
  }


}
