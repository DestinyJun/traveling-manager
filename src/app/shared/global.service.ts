import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  public sessionStorage: any;
  constructor() {
    if (!sessionStorage) {
      throw new Error('很抱歉，当前浏览器不支持sessionStorage');
    }
    this.sessionStorage = sessionStorage;
  }
  public set(key: string, value: string): void {
    this.sessionStorage[key] = value;
  }

  public get(key: string): string {
    return this.sessionStorage[key] || false;
  }

  public setObject(key: string, value: any): void {
    this.sessionStorage[key] = JSON.stringify(value);
  }

  public getObject(key: string): any {
    return JSON.parse(this.sessionStorage[key] || '{}');
  }

  public remove(key: string): any {
    this.sessionStorage.removeItem(key);
  }

}
export class NavList {
  constructor(
    public title: string,
    public routers: string,
    public icon: string,
    public clsstate: boolean,
    public children: NavListChild[],
    public open: boolean
  ) {}
}
export class NavListChild {
  constructor(
    public title: string,
    public setState: boolean,
    public routers: string
  ) {}
}


export class PageBody {
  constructor(
    public page: number,
    public rows: number
  ) {}
}

export class DeparmentList {
  constructor(
    public id: number,
    public name: string,
    public dcode: string,
    public tel: string,
    public oid: number,
    public pid: number,
    public idt: string,
    public udt: string
  ) {}
}

// 生产线查询
export class DeviceProductionLineList {
  constructor(
    public id: number,
    public name: string,
    public number: string,
    public phone: string,
    public num: number,
    public card: string,
    public time: string,
    public remark: string,
  ) {}
}

