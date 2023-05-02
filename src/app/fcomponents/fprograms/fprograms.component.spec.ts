import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FprogramsComponent } from './fprograms.component';

describe('FprogramsComponent', () => {
  let component: FprogramsComponent;
  let fixture: ComponentFixture<FprogramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FprogramsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FprogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
