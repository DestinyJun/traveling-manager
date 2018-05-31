import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {PageBody, DeviceProductionLineList} from '../../shared/global.service';
import {ReqService} from '../../shared/req.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FileUploader} from 'ng2-file-upload';
import {Router} from '@angular/router';
import {CustomValidators} from 'ng4-validators';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public ProductionLines: Array<DeviceProductionLineList>;
  public modalRef: BsModalRef;
  public pageBody: PageBody;
  public num: number;
  public prolineDetail: any;
  public prolineAddForm: FormGroup;
  public prolineModifyForm: FormGroup;
  public hasChecked: Array<number> = [];
  public checked: string;
  public nowPage: number;
  public skpPage: string;
  public file: any;
  public formData: FormData = new FormData();
  public fileDate: FormData = new FormData();
  // public file: any;
  // 上传文件
  public uploader: FileUploader = new FileUploader({
    url: '/test/upload/spring',
    method: 'POST',
    itemAlias: 'uploadfile',
  });
  constructor(
    public route: Router,
    public modalService: BsModalService,
    public req: ReqService,
    public fb: FormBuilder,
  ) {
    // 对表格的初始化
    this.skpPage = '1';
    this.pageBody = new PageBody(1, 6);
    this.nowPage = this.pageBody.page;
    this.Update();
    // 增加模态框表单
    this.prolineAddForm = fb.group({
        number: ['', [Validators.required, CustomValidators.number, CustomValidators.rangeLength([5, 5])]],
        name: ['', [Validators.required]],
        phone: ['', [Validators.required, CustomValidators.number, CustomValidators.rangeLength([11, 11]) ]],
        card: ['', [Validators.required, CustomValidators.rangeLength([18, 18])]],
        remark: ['']
      });
    // 修改模态框表单
    this.prolineModifyForm = fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, CustomValidators.number, CustomValidators.rangeLength([11, 11]) ]],
      card: ['', [Validators.required, CustomValidators.rangeLength([18, 18])]],
      remark: ['']
    });
  }

  ngOnInit() {

  }

  // 全选 或 全不选
  public getAllCheckBoxStatus(e): void {
    if (e.srcElement.checked === true) {
      this.hasChecked = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      this.hasChecked.splice(this.ProductionLines.length, 10);
      console.log(this.hasChecked);
      this.checked = 'checked';
    } else {
      this.hasChecked = [];
      this.checked = '';
    }
  }

  // 得到已选择的checkBox
  public getCheckBoxStatus(e, i): void {
    let haschecklen = this.hasChecked.length;
    if (e.srcElement.checked === true) {
      this.hasChecked.push(i);
    } else {
      for (let j = 0; j < haschecklen; j++ ) {
        if (this.hasChecked[j] === i) {
          this.hasChecked.splice(j, 1);
        }
      }
    }
    if (this.hasChecked.length === 1) {
      this.prolineDetail = this.ProductionLines[this.hasChecked[0]];
    } else {
      this.prolineDetail = null;
    }
    console.log(this.prolineDetail);
  }

  // 获取用户列表
  public Update(): void {
    this.req.getUserList(this.pageBody).subscribe(
      (value) => {
        // console.log(value);
        this.num = Math.ceil(value.total / 6);
        this.ProductionLines = value.rows;
        this.hasChecked = [];
        this.checked = '';
      });
  }

  // 增加用户
  public prolineAdd(): void {
    console.log(this.prolineAddForm.value);
    if (this.prolineAddForm.valid) {
      this.req.addUser(this.prolineAddForm.value)
        .subscribe(data => {
          if (!data.success) {
            window.alert( data.msg);
            return;
          }
          window.alert(data.msg);
          this.Update();
        });
    }else {
      window.alert('请输入合参数');
    }
  }

  //  修改表格内容
  public prolineModify(): void {
    this.prolineModifyForm.value.id = this.prolineDetail.id;
    console.log(this.prolineModifyForm.value);
    if (this.prolineModifyForm.valid) {
     this.req.updateUser(this.prolineModifyForm.value)
        .subscribe(res => {
          if (!res.success) {
            window.alert( res.msg);
            return;
          }
          window.alert( res.msg);
          this.Update();
        });
    } else {
      window.alert('请输入合参数');
    }
  }

//  删除表格 并且 重新请求数据
  public deleteProLine(): void {
    let haschecklen = this.hasChecked.length;
    if (haschecklen === 0) {
      alert('请选中你要删除的选项!');
    } else {
      let confirm = window.confirm('确定删除吗');
      if (confirm) {
        for (let j = 0; j < haschecklen; j++) {
          this.req.deleteUser({id : this.ProductionLines[this.hasChecked[j]].id})
            .subscribe(status => {
              console.log(status);
              if (status.success) {
                window.alert(status.msg);
              } else {
                window.alert(status.msg);
              }
              this.Update();
            });
        }
      }
    }
  }

  //  首页页
  public firstPage(): void {
    this.pageBody.page = 1;
    this.nowPage = 1;
    this.Update();
  }

  //  上一页
  public previousPage(): void {
    if (this.pageBody.page <= 1) {
      alert('已经到达首页');
    } else {
      this.pageBody.page -= 1;
      this.nowPage = this.pageBody.page;
      this.Update();
    }
  }

//  下一页
  public nextPage(): void {
    if (this.pageBody.page >= this.num) {
      alert('已经到达尾页');
    } else {
      this.pageBody.page += 1;
      this.nowPage = this.pageBody.page;
      this.Update();
    }
  }

  // 尾页
  public lastPage(): void {
    this.pageBody.page = this.num;
    this.nowPage = this.pageBody.page;
    this.Update();
  }

  // 指定跳转页
  public appointPage(event): void {
    if (event.keyCode === 13 || event.type === 'click') {
      if (Number(this.skpPage) > this.num || Number(this.skpPage) <= 0 || this.skpPage === null) {
        alert('你的输入超过最大页数或格式有误');
      } else {
        this.pageBody.page = Number(this.skpPage);
        this.nowPage = Number(this.skpPage);
        this.Update();
      }
    }
  }

  // 控制修改模态框
  public openProLine(template: TemplateRef<any>): void {
    if (this.hasChecked.length > 1 || this.hasChecked.length === 0) {
      alert('请只选择一项进行操作!');
    } else {
      this.modalRef = this.modalService.show(template);
      this.prolineModifyForm.reset(this.prolineDetail);
      console.log(this.prolineModifyForm.value);
    }
  }

  // 控制模态框增加
  public openProLineAdd(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  // 生成二维码
  public onQrcode(id, number) {
    this.route.navigate(['/home/qrcode', id, number]);
  }

  // ***********************************上传文件******************************

  // 点击隐藏的input
  public importClick(event: any): void {
    event.click();
  }
  // 定义事件，选择文件
  public selectedFileOnChanged(event: any) {
    this.formData.append('uploadfile', event.srcElement.files[0]);
    this.req.fileUpload(this.formData).subscribe(
      value => {
        if (value) {
        event.srcElement.value = '';
          this.req.fileImport().subscribe(
            value1 => {
              window.alert(value1.msg);
              this.Update();
            }
          );
        }
      }
    );
    /*if (this.uploader.queue[0]) {
      this.uploadFile();
    }*/
  }
  // D: 定义事件，上传文件
  public uploadFile() {
    // 上传
    console.log(this.uploader.queue[0]);
    this.uploader.queue[0].onSuccess = function (response, status, headers) {
      // 上传文件成功
      if (status === 200) {
        // 上传文件后获取服务器返回的数据
        let tempRes = JSON.parse(response);
        console.log(tempRes);
      } else {
        // 上传文件后获取服务器返回的数据错误
        alert('');
      }
    };
    // 开始上传
    this.uploader.queue[0].upload();
  }

// ***********************************导出文件******************************
  public exportClick(): void {
    this.req.fileExport().subscribe(
      value => {
        if (value.success) {
          let a = window.confirm('导出成功');
          this.Update();
          if (a) {
            window.open('http://www.hry520.com/upload/user.xlsx');
          }
        }
      }
    );
  }
}
