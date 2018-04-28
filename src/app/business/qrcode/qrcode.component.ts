import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../../shared/global.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {
  public localhostPathUrl: string;
  public color: string;
  public number: string;
  public size: number;
  public personId: number;
  constructor(
    private localtions: GlobalService,
    private routerInfo: ActivatedRoute
  ) {
    this.personId = this.routerInfo.snapshot.params['id'];
    this.number = this.routerInfo.snapshot.params['number'];
    console.log(this.personId);
    this.size = 256;
    this.localhostPathUrl = 'http://www.hry520.com/trc' + '?' + 'id=' + this.personId;
    console.log(this.localhostPathUrl);
    this.color = '#FF628C';
  }
  ngOnInit() {}
  public amplification() {
    this.size = this.size + 10;
    console.log(this.size);
  }
  public shrink() {}
}
