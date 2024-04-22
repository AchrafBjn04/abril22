import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantiagoBernabeuComponent } from './santiago-bernabeu.component';

describe('SantiagoBernabeuComponent', () => {
  let component: SantiagoBernabeuComponent;
  let fixture: ComponentFixture<SantiagoBernabeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SantiagoBernabeuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SantiagoBernabeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
