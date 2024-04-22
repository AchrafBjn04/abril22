import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamonSanchezPijuanComponent } from './ramon-sanchez-pijuan.component';

describe('RamonSanchezPijuanComponent', () => {
  let component: RamonSanchezPijuanComponent;
  let fixture: ComponentFixture<RamonSanchezPijuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RamonSanchezPijuanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RamonSanchezPijuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
