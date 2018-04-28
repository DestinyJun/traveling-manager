import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ReqService {

  constructor(private http: HttpClient) { }
  // 登陆验证
  public getLogin(params): Observable<any> {
    console.log(params);
    return this.http.get('/import/loginWeb', {params});
  }

  // 用户列表
  public getUserList(params): Observable<any> {
    console.log(params);
    return this.http.get('/import/user/list', {params});
  }

  // 增加用户
  public addUser(params): Observable<any> {
    console.log(params);
    return this.http.get('/import/user/addUser', {params});
  }

  // 修改用户
  public updateUser(params): Observable<any> {
    console.log(params);
    return this.http.get('/import/user/updateUser', {params});
  }

  // 删除用户
  public deleteUser(params): Observable<any> {
    console.log(params);
    return this.http.get('/import/user/deleteUser', {params});
  }

  // 增加扫描次数
  public updateNum(params): Observable<any> {
    console.log(params);
    return this.http.get('/import/user/updateNum', {params});
  }

  // 文件上传
  public importFile(params): Observable<any> {
    console.log(params);
    return this.http.get('/import/user/import', {params});
  }

  // 文件导出
  public exportFile(params): Observable<any> {
    console.log(params);
    return this.http.get('/import/user/export', {params});
  }
}
