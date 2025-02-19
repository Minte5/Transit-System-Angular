import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendToStoreComponent } from './send-to-store.component';

describe('SendToStoreComponent', () => {
  let component: SendToStoreComponent;
  let fixture: ComponentFixture<SendToStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendToStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendToStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
