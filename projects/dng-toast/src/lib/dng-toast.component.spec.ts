import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DngToastComponent } from './dng-toast.component';

describe('DngToastComponent', () => {
  let component: DngToastComponent;
  let fixture: ComponentFixture<DngToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DngToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DngToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
