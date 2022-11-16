import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PattariesComponent } from './pattaries.component';

describe('PattariesComponent', () => {
  let component: PattariesComponent;
  let fixture: ComponentFixture<PattariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PattariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PattariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
