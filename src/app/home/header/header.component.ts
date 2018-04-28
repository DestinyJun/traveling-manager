import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public scrollToggle: boolean;
  public navListToggle: boolean;
  public userReminds: UserRemind[];
  public userRemindsChange: any;
  public bigBoxHeight: number;
  public contentBoxHeight: number;
  public barBoxHeight: string;
  public infoToggle: boolean;
  constructor(private route: Router, private http: HttpClient) {
    this.infoToggle = true;
    this.scrollToggle = true;
    this.navListToggle = true;
  }
  ngOnInit() {}
  public troggleInfo(): void {
    this.infoToggle = !this.infoToggle;
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

