import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionItemsListComponent } from './inspection-items-list.component';

describe('InspectionItemsListComponent', () => {
  let component: InspectionItemsListComponent;
  let fixture: ComponentFixture<InspectionItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspectionItemsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectionItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
