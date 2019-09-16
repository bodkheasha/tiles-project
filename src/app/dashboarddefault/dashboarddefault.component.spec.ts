import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarddefaultComponent } from './dashboarddefault.component';

describe('DashboarddefaultComponent', () => {
  let component: DashboarddefaultComponent;
  let fixture: ComponentFixture<DashboarddefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboarddefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboarddefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
