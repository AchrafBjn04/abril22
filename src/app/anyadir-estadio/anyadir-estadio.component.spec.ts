import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyadirEstadioComponent } from './anyadir-estadio.component';

describe('AnyadirEstadioComponent', () => {
  let component: AnyadirEstadioComponent;
  let fixture: ComponentFixture<AnyadirEstadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnyadirEstadioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnyadirEstadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
