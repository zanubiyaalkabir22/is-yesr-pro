import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinsComponent } from './machins.component';

describe('MachinsComponent', () => {
  let component: MachinsComponent;
  let fixture: ComponentFixture<MachinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
