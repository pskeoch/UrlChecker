import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CheckURLService } from '../check-url.service';

@Component({
  selector: 'app-url-response-check',
  templateUrl: './url-response-check.component.html',
  styleUrls: ['./url-response-check.component.css']
})
export class UrlResponseCheckComponent implements OnInit {

  @Input() url!: string;

  @Input() linkCheckStatus!: number;

  httpStatus: number = 0;
  statusIndicator: string = '#ff0000';

  constructor(private urlCheck: CheckURLService) { }

  ngOnInit(): void {
  }

  getUrl(): void {
    this.urlCheck.checkURL('https://' + this.url + '/')
      .subscribe(response => this.setStatusIndicator(response.status));
  }

  setStatusIndicator(status: number) {
    this.httpStatus = status;
    if (status == 200) {
      this.statusIndicator = '#00ff00';
    } else if (status == 404) {
      this.statusIndicator = '#ff0000';
    }
  }

  ngOnChanges(change: SimpleChanges) {
    if (change['linkCheckStatus'].currentValue == 1) {
      this.getUrl();
    }
  }

}
