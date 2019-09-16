import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorNameComponent } from './color-name.component';

describe('ColorNameComponent', () => {
  let component: ColorNameComponent;
  let fixture: ComponentFixture<ColorNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
