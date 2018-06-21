import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialLoginComponent } from './dial-login.component';

describe('DialLoginComponent', () => {
  let component: DialLoginComponent;
  let fixture: ComponentFixture<DialLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
