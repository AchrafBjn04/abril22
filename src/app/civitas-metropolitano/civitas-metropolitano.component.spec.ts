import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivitasMetropolitanoComponent } from './civitas-metropolitano.component';

describe('CivitasMetropolitanoComponent', () => {
  let component: CivitasMetropolitanoComponent;
  let fixture: ComponentFixture<CivitasMetropolitanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CivitasMetropolitanoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CivitasMetropolitanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
