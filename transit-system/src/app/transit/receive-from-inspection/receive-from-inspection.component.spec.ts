import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveFromInspectionComponent } from './receive-from-inspection.component';

describe('ReceiveFromInspectionComponent', () => {
  let component: ReceiveFromInspectionComponent;
  let fixture: ComponentFixture<ReceiveFromInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiveFromInspectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiveFromInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
