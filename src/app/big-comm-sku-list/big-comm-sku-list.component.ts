import { Component, OnInit, ViewChild } from '@angular/core';
import { BigCommerceService } from '../big-commerce.service';
import { BigCommerce_Product } from '../bigCommerce_Product';
import { OtpDBTitleLookupComponent } from '../otp-db-title-lookup/otp-db-title-lookup.component';

@Component({
  selector: 'app-big-comm-sku-list',
  templateUrl: './big-comm-sku-list.component.html',
  styleUrls: ['./big-comm-sku-list.component.css']
})
export class BigCommSkuListComponent implements OnInit {

  linkCheckStatus: number = 0;

  productList: BigCommerce_Product[] = [];

  constructor(private bigCommerceService: BigCommerceService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(): void {
    this.bigCommerceService.BigComm_ProductRequest().subscribe(products => {
        this.productList = products;
      }
    );
  }

  setRunLinkChecking(status: number) {
   this.linkCheckStatus = status;
  }

}
