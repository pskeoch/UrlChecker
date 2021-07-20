import { Component, Input, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { BigCommerce_Product } from '../bigCommerce_Product';
import { TitleLookupService } from '../title-lookup.service';

@Component({
  selector: 'app-otp-db-title-lookup',
  templateUrl: './otp-db-title-lookup.component.html',
  styleUrls: ['./otp-db-title-lookup.component.css']
})
export class OtpDBTitleLookupComponent implements OnInit {

  @Input() product!: BigCommerce_Product;
  @Input() runLinkCheck!: number;

  lookupURL: string = '';
  linkCheckStatus: number = 0;

  constructor(private titleLookup: TitleLookupService) { }

  ngOnInit(): void {
    this.getLookup(this.product.id);
  }

  parseResult(lookup: any) {
    if (lookup) {
      this.lookupURL = lookup.otpubsURL_base + lookup.otpubsURL_ref;
    } else {
      console.log("no product URL found");
      this.lookupURL = 'No lookup record for this SKU';
    }
  }

  getLookup(id: number): void {
    this.titleLookup.OTP_getLookup(id)
      .subscribe(lookup => this.parseResult(lookup));
  }

  runUrlCheck() {
    console.log("checking" + this.lookupURL);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.linkCheckStatus = changes['runLinkCheck'].currentValue;
  }

}
