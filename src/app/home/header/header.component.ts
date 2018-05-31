import {AfterViewInit, Component, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReqService} from '../../shared/req.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {CustomValidators} from 'ng4-validators';
import {GlobalService} from '../../shared/global.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public prolineAddForm: FormGroup;
  public modalRef: BsModalRef;
  public scrollToggle: boolean;
  public navListToggle: boolean;
  public userReminds: UserRemind[];
  public userRemindsChange: any;
  public bigBoxHeight: number;
  public contentBoxHeight: number;
  public barBoxHeight: string;
  public infoToggle: boolean;
  constructor(
    private route: Router,
    public modalService: BsModalService,
    public req: ReqService,
    public fb: FormBuilder,
    public global: GlobalService
  ) {
    this.infoToggle = true;
    this.scrollToggle = true;
    this.navListToggle = true;
  }
  ngOnInit() {
    // 修改密码
    this.prolineAddForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  public troggleInfo(): void {
    this.infoToggle = !this.infoToggle;
  }
  // 打开修改密码模态框
  public openProLineAdd(template: TemplateRef<any>): void {
    this.infoToggle = !this.infoToggle;
    this.modalRef = this.modalService.show(template);
  }
  // 修改密码
  public prolineAdd(): void {
    if (this.prolineAddForm.valid) {
      this.req.updatePassword(this.prolineAddForm.value)
        .subscribe(data => {
          if (!data.success) {
            window.alert( data.msg);
            return;
          }
          window.alert(data.msg);
        });
    }else {
      window.alert('请输入合参数');
    }
  }

}
export class UserRemind {
  constructor(
    public classFlag: string,
    public userPhoto: string,
    public userMessage: string,
    public userTime: Date
  ) {}
}

