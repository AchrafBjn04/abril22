import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampNouComponent } from './camp-nou.component';

describe('CampNouComponent', () => {
  let component: CampNouComponent;
  let fixture: ComponentFixture<CampNouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampNouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampNouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
