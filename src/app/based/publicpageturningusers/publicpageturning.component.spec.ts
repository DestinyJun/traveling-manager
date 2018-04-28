import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicpageturningComponent } from './publicpageturning.component';

describe('PublicpageturningComponent', () => {
  let component: PublicpageturningComponent;
  let fixture: ComponentFixture<PublicpageturningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicpageturningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicpageturningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
