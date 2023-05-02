import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreportComponent } from './freport.component';

describe('FreportComponent', () => {
  let component: FreportComponent;
  let fixture: ComponentFixture<FreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
