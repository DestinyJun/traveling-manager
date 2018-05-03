import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ReqService {
  public headers = { headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})};

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
  public importFile(body): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this.http.post('/test/upload/spring', body, {
      headers: headers,
    });
  }

  // 文件导出
  public exportFile(params): Observable<any> {
    console.log(params);
    return this.http.get('/import/user/export', {params});
  }

  // 测试接口
  public test(body): Observable<any> {
    console.log(body);
    return this.http.post('/test/upload/spring1', body);
  }

  // 用户管理查询
  public getUsersManager(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/user/query', body);
  }
}
