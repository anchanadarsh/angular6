import { Component, OnInit } from '@angular/core';
import { ProductList } from '../productlist.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public products: ProductList) { 
      
  }

  ngOnInit() {
  }

}
