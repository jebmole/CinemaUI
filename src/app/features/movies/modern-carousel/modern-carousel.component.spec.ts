import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernCarouselComponent } from './modern-carousel.component';

describe('ModernCarouselComponent', () => {
  let component: ModernCarouselComponent;
  let fixture: ComponentFixture<ModernCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModernCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
