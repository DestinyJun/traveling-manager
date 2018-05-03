import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {GlobalService} from '../../shared/global.service';
import {ActivatedRoute} from '@angular/router';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit, AfterContentInit {
  @ViewChild('dyncomp', {read: ViewContainerRef})
  dyncomp: ViewContainerRef;
  comp1: ComponentRef<ChildComponent>;
  public localhostPathUrl: string;
  public color: string;
  public number: string;
  public size: number;
  public personId: number;
  constructor(
    private localtions: GlobalService,
    private routerInfo: ActivatedRoute,
    private resolver: ComponentFactoryResolver
  ) {
    this.personId = this.routerInfo.snapshot.params['id'];
    this.number = this.routerInfo.snapshot.params['number'];
    this.localhostPathUrl = 'http://www.hry520.com/trc' + '?' + 'id=' + this.personId;
    this.size = 256;
  }
  ngOnInit() {}
  public onClick() {
    const childComp = this.resolver.resolveComponentFactory(ChildComponent);
    this.comp1 = this.dyncomp.createComponent(childComp);
    this.comp1.instance.localhostPathUrl = this.localhostPathUrl;
    this.comp1.instance.size = this.size;
    this.comp1.instance.number = this.number;
  }
  ngAfterContentInit(): void {}
  public onClickDestroy(): void {
    this.comp1.destroy();
  }
}
