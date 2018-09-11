import { Component, OnInit } from '@angular/core';
import { ProductList } from '../productlist.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
    getIndex : number;
    
    //method to delete product
    deleteProd(index){
       this.getIndex = index;
       this.productslist.productList.splice(this.getIndex,1);
    }

  constructor(public productslist: ProductList) { }

  ngOnInit() {}

}
