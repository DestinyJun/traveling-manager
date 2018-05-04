import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ReqService {
  constructor(private http: HttpClient) { }
  // 登陆验证
  public getLogin(params): Observable<any> {
    return this.http.get('/import/loginWeb', {params});
  }

  // 用户列表
  public getUserList(params): Observable<any> {
    return this.http.get('/import/user/list', {params});
  }

  // 增加用户
  public addUser(params): Observable<any> {
    return this.http.get('/import/user/addUser', {params});
  }

  // 修改用户
  public updateUser(params): Observable<any> {
    return this.http.get('/import/user/updateUser', {params});
  }

  // 删除用户
  public deleteUser(params): Observable<any> {
    return this.http.get('/import/user/deleteUser', {params});
  }

  // 文件上传
  public fileUpload(body): Observable<any> {
    return this.http.post('/springmvc/upload/spring', body, {
      reportProgress: true
    });
  }

  // 文件导入
  public fileImport(): Observable<any> {
    return this.http.get('/import/user/import');
  }

  // 文件导出
  public fileExport(): Observable<any> {
    return this.http.get('/import/user/export');
  }

  // 文件下载
  public fileDown(body): Observable<any> {
    return this.http.post('/test/download/file', body, {
      reportProgress: true
    });
  }
}
