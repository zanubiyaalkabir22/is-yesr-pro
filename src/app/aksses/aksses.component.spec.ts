import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkssesComponent } from './aksses.component';

describe('AkssesComponent', () => {
  let component: AkssesComponent;
  let fixture: ComponentFixture<AkssesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkssesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkssesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
