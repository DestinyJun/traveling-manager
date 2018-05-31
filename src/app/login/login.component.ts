import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReqService} from '../shared/req.service';
import {GlobalService} from '../shared/global.service';
import {Router} from '@angular/router';
import {CustomValidators} from 'ng4-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // 表单
  public myFromModule: FormGroup;
  // 本地字段
  public loginSuccess: boolean;
  public loginMsg: string;
  // 表单字段
  public usernameForm: any;
  public passwordForm: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: ReqService,
    private localSessionStorage: GlobalService,
  ) {
    this.loginSuccess = true;
    this.myFromModule = fb.group({
      username: ['', [Validators.required]],
      password: ['' , [Validators.required, Validators.minLength(6)]]
    });
    this.usernameForm = this.myFromModule.get('username');
    this.passwordForm = this.myFromModule.get('password');
  }
  ngOnInit() {}
  public onLoginSubmit() {
    if (this.myFromModule.valid) {
      this.loginService.getLogin(this.myFromModule.value).subscribe((data) => {
        if (data.success) {
          console.log(data);
          // 本地存储信息
          for ( let i in data) {
            if (data.hasOwnProperty(i)) {
              this.localSessionStorage.set(i, data[i]);
            }
          }
          window.alert('登陆成功');
          this.router.navigate(['/home', {id: data.obj.id}]);
        } else {
          this.loginSuccess = data.success;
          this.loginMsg = data.msg;
          window.alert(data.msg);
        }
      });
    } else {
      alert('用户名或者密码不能为空');
    }
  }
}
