import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public localhostPathUrl: string;
  public size: number;
  public number: string;
  constructor() {}
  ngOnInit() {}
}
