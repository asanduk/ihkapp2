import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitfadenComponent } from './leitfaden.component';

describe('LeitfadenComponent', () => {
  let component: LeitfadenComponent;
  let fixture: ComponentFixture<LeitfadenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeitfadenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeitfadenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
